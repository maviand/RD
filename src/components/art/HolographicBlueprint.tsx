"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HolographicBlueprint() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;

        // 1. Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 6;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // 2. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x002D62, 2, 10);
        scene.add(pointLight);

        // 3. Geometry
        const rojoRD = new THREE.Color(0xCE1126);
        const blanco = new THREE.Color(0xFFFFFF);

        // Blueprint Sphere
        const blueprintGeo = new THREE.SphereGeometry(2.5, 24, 24);
        const wireframeGeo = new THREE.WireframeGeometry(blueprintGeo);
        const blueprintMat = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.3
        });
        const blueprint = new THREE.LineSegments(wireframeGeo, blueprintMat);
        scene.add(blueprint);

        // Nodes
        const nodeCount = 10;
        const nodeRadius = 3.5;
        const nodeGeo = new THREE.BufferGeometry();
        const nodePositions: number[] = [];
        const nodeColors: number[] = [];

        for (let i = 0; i < nodeCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / (nodeCount - 1));
            const theta = Math.sqrt(nodeCount * Math.PI) * phi;

            nodePositions.push(nodeRadius * Math.cos(theta) * Math.sin(phi));
            nodePositions.push(nodeRadius * Math.sin(theta) * Math.sin(phi));
            nodePositions.push(nodeRadius * Math.cos(phi));

            const color = i % 2 === 0 ? rojoRD : blanco;
            nodeColors.push(color.r, color.g, color.b);
        }

        nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
        nodeGeo.setAttribute('color', new THREE.Float32BufferAttribute(nodeColors, 3));

        const nodeMat = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });
        const nodes = new THREE.Points(nodeGeo, nodeMat);
        scene.add(nodes);


        // 4. Scroll Logic
        let scrollPercent = 0;

        const updateScrollPercent = () => {
            // Generic scroll fallback
            const docHeight = document.body.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                scrollPercent = window.scrollY / docHeight; // Simple full page scroll map
                // Or replicate specific section logic if critical, but full page is often robust enough for background art
            }
        };

        window.addEventListener('scroll', updateScrollPercent, { passive: true });
        updateScrollPercent();

        // 5. Animation
        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Rotation
            blueprint.rotation.y = elapsedTime * 0.1;
            nodes.rotation.y = elapsedTime * 0.05;
            nodes.rotation.x = elapsedTime * 0.03;

            // Scroll reaction
            const scale = 1 + scrollPercent * 0.1;
            blueprint.scale.set(scale, scale, scale);
            nodes.scale.set(scale, scale, scale);

            blueprintMat.opacity = 0.3 + scrollPercent * 0.4;
            nodeMat.opacity = 0.5 + scrollPercent * 0.5;
            nodeMat.size = 0.15 + scrollPercent * 0.1;

            pointLight.intensity = 1.5 + Math.sin(elapsedTime * 3) * 0.5 + scrollPercent;

            renderer.render(scene, camera);
        };

        animate();

        // 6. Resize
        const handleResize = () => {
            if (!container) return;
            const width = container.clientWidth;
            const height = container.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', updateScrollPercent);
            window.removeEventListener('resize', handleResize);
            blueprintGeo.dispose();
            wireframeGeo.dispose();
            blueprintMat.dispose();
            nodeGeo.dispose();
            nodeMat.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full z-0">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
