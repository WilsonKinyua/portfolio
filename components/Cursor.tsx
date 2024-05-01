"use client"
import React, { useEffect, useState } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(true); // Start with the cursor hidden

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
        setHidden(false); // Show the cursor when it moves
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (hidden) return null;

    return (
        <div style={{
            pointerEvents: 'none',
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#FF014F',
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s linear, top 0.1s linear'
        }} />
    );
};