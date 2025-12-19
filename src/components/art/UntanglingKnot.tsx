"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function UntanglingKnot() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;

        // 1. Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // 2. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(-1, 1, 3);
        scene.add(directionalLight);

        // 3. Knot Geometry
        const numTubes = 10;
        const tubes: THREE.Mesh[] = [];
        const tangledPoints: THREE.Vector3[][] = [];
        const untangledPoints: THREE.Vector3[][] = [];

        const material = new THREE.MeshStandardMaterial({
            color: 0xCE1126, // rojo-rd
            roughness: 0.3,
            metalness: 0.2,
        });

        for (let i = 0; i < numTubes; i++) {
            // Untangled state (Order)
            let y = THREE.MathUtils.lerp(-2, 2, i / (numTubes - 1));
            untangledPoints.push([
                new THREE.Vector3(-4, y, 0),
                new THREE.Vector3(-2, y, 0),
                new THREE.Vector3(2, y, 0),
                new THREE.Vector3(4, y, 0)
            ]);

            // Tangled state (Chaos)
            tangledPoints.push([
                new THREE.Vector3(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 2 - 1),
                new THREE.Vector3(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 2 - 1),
                new THREE.Vector3(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 2 - 1),
                new THREE.Vector3(Math.random() * 4 - 2, Math.random() * 4 - 2, Math.random() * 2 - 1)
            ]);

            const curve = new THREE.CatmullRomCurve3(tangledPoints[i]);
            const geometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false);
            const tubeMesh = new THREE.Mesh(geometry, material);
            scene.add(tubeMesh);
            tubes.push(tubeMesh);
        }

        // 4. Scroll Logic
        let scrollPercent = 0;

        const updateScrollPercent = () => {
            // Target element is the main content following the hero, usually passed via context or queried by ID
            // For simplicity, we'll try to find the 'objetivos' section if it exists, otherwise base on global scroll
            const objetivosSection = document.getElementById('objetivos');

            if (objetivosSection) {
                const rect = objetivosSection.getBoundingClientRect();
                const viewHeight = window.innerHeight;

                let start = rect.top - viewHeight;
                let end = rect.top + rect.height;
                let totalScrollable = (end - start + rect.height);

                if (totalScrollable !== 0) {
                    // Calculate percentage
                    // We want it to be 0 at start, 1 at end.
                    // Actually logic in original was: start * -1 / total
                    scrollPercent = (start * -1) / totalScrollable;
                    scrollPercent = THREE.MathUtils.clamp(scrollPercent, 0, 1);
                }
            } else {
                // Fallback: Bind to scroll of the page (0 at top, 1 at bottom? No, generic scroll)
                const docHeight = document.body.scrollHeight - window.innerHeight;
                scrollPercent = window.scrollY / docHeight;
            }
        };

        window.addEventListener('scroll', updateScrollPercent, { passive: true });
        updateScrollPercent();

        // 5. Animation Loop
        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            tubes.forEach((tube, i) => {
                const currentPoints: THREE.Vector3[] = [];
                const tangled = tangledPoints[i];
                const untangled = untangledPoints[i];

                for (let j = 0; j < tangled.length; j++) {
                    const x = THREE.MathUtils.lerp(tangled[j].x, untangled[j].x, scrollPercent);
                    const y = THREE.MathUtils.lerp(tangled[j].y, untangled[j].y, scrollPercent);
                    const z = THREE.MathUtils.lerp(tangled[j].z, untangled[j].z, scrollPercent);
                    currentPoints.push(new THREE.Vector3(x, y, z));
                }

                // Rotation/Vibration
                let rotationAmount = (1 - scrollPercent) * 0.5;
                tube.rotation.x = Math.sin(elapsedTime * 0.5 + i) * rotationAmount;
                tube.rotation.y = Math.cos(elapsedTime * 0.3 + i) * rotationAmount;

                if (currentPoints.length === tangled.length) {
                    const newCurve = new THREE.CatmullRomCurve3(currentPoints);
                    const newGeometry = new THREE.TubeGeometry(newCurve, 20, 0.05, 8, false);

                    tube.geometry.dispose();
                    tube.geometry = newGeometry;
                }
            });

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
            // Cleanup Three.js
            tubes.forEach(t => {
                t.geometry.dispose();
                (t.material as THREE.Material).dispose();
            });
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full z-0">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
