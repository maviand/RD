"use client";

import { useEffect, useRef } from "react";

export default function NexusWeave() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Configuration
        const particleColors = [
            "#CE1126", // Rojo Bermejo
            "#FFFFFF", // Blanco
            "rgba(255, 255, 255, 0.3)", // Translucent White
        ];

        let particles: Particle[] = [];
        let particleCount = window.innerWidth < 768 ? 75 : 150;

        // Mouse state
        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 120,
        };

        class Particle {
            x: number;
            y: number;
            dirX: number;
            dirY: number;
            size: number;
            color: string;
            baseSize: number;

            constructor(x: number, y: number, dirX: number, dirY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.dirX = dirX;
                this.dirY = dirY;
                this.size = size;
                this.color = color;
                this.baseSize = size;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;

                // Bounce off edges
                if (this.x + this.size > canvas.width || this.x - this.size < 0) {
                    this.dirX = -this.dirX;
                }
                if (this.y + this.size > canvas.height || this.y - this.size < 0) {
                    this.dirY = -this.dirY;
                }

                // Mouse interaction
                let dx = 0;
                let dy = 0;

                if (mouse.x !== null && mouse.y !== null) {
                    dx = mouse.x - this.x;
                    dy = mouse.y - this.y;
                }

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (mouse.x !== null && distance < mouse.radius) {
                    this.size = Math.min(this.baseSize * 4, 8);
                    this.x += this.dirX * 2.5;
                    this.y += this.dirY * 2.5;
                } else {
                    if (this.size > this.baseSize) {
                        this.size -= 0.1;
                    }
                    this.x += this.dirX;
                    this.y += this.dirY;
                }

                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 1.5 + 0.5;
                const x = centerX + (Math.random() - 0.5) * 50;
                const y = centerY + (Math.random() - 0.5) * 50;
                const dirX = Math.random() * 1.0 - 0.5;
                const dirY = Math.random() * 1.0 - 0.5;
                const color = particleColors[Math.floor(Math.random() * particleColors.length)];

                particles.push(new Particle(x, y, dirX, dirY, size, color));
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.fillStyle = "rgba(0, 45, 98, 0.15)"; // azul-rd with low alpha
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => p.update());
        };

        const handleResize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
            particleCount = window.innerWidth < 768 ? 75 : 150;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Initial setup
        handleResize();
        animate();

        // Listeners
        window.addEventListener("resize", handleResize);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", handleResize);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 block" />;
}
