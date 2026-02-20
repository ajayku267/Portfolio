import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { technologies } from '../../constants';

const Word = ({ children, position }) => {
    const ref = useRef();
    const color = new THREE.Color();

    useFrame(({ camera }) => {
        if (!ref.current) return;
        // Make text face camera
        ref.current.quaternion.copy(camera.quaternion);
        // Darken text that is further away
        const dist = camera.position.distanceTo(ref.current.position);
        ref.current.material.color.lerp(
            color.set(dist > 15 ? '#4b5563' : '#915eff'),
            0.1
        );
    });

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={1.2}
            letterSpacing={-0.05}
            frustumCulled={false}
        >
            {children}
        </Text>
    );
};

const Cloud = ({ radius = 10 }) => {
    const group = useRef();

    // Distribute words over a sphere using Fibonacci lattice
    const count = technologies.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

    const words = technologies.map((tech, i) => {
        const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
        const r = Math.sqrt(1 - y * y); // radius at y
        const theta = phi * i; // golden angle increment

        return {
            name: tech.name,
            pos: [
                Math.cos(theta) * r * radius,
                y * radius,
                Math.sin(theta) * r * radius
            ]
        };
    });

    useFrame((state) => {
        if (!group.current) return;
        // Auto rotation
        group.current.rotation.y = state.clock.elapsedTime * 0.2;
        // Mouse interaction tilt
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 4, 0.05);
        group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, (state.mouse.x * Math.PI) / 4, 0.05);
    });

    return (
        <group ref={group}>
            {words.map((word, i) => (
                <Word key={i} position={word.pos}>{word.name}</Word>
            ))}
        </group>
    );
};

export default Cloud;
