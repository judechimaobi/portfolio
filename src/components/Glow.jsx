import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Glow = () => {
  const lightRef = useRef();
  const [mouse, setMouse] = useState([0, 0]);

  const handleMouseMove = (e) => {
    // Normalize mouse coordinates (-1 to 1 range)
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    setMouse([x * 5, y * 5]); // Scale for 3D space
  };

  // Move light dynamically with mouse
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.set(mouse[0], mouse[1], 2); // Set Z for depth
    }
  });

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 0, 2]}
        intensity={2}
        distance={10}
        decay={2}
        color="white"
        onPointerMove={handleMouseMove}
      />
    </>
  );
};

export default Glow;
