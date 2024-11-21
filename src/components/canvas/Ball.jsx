// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';


// const Ball = ({ imgUrl }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     <mesh castShadow receiveShadow scale={3.75}>
//       <icosahedronGeometry args={[1, 1]} />
//       <meshStandardMaterial
//         color="#fff"
//         polygonOffset
//         polygonOffsetFactor={-5}
//         flatShading
//       />
//       <Decal
//         position={[0, 0, 1]}
//         rotation={[2 * Math.PI, 0, 6.25]}
//         scale={1.5}
//         map={decal}
//       />
//     </mesh>
//   );
// };





// const BallCanvas = ({ icons }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[0, 0, 0.05]} />
//         <OrbitControls enableZoom={false} />
//         <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//           {icons.map((icon, index) => (
//             <Ball key={index} imgUrl={icon} />
//           ))}
//         </Float>
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;




















import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Decal, Float, OrbitControls, Preload, useTexture 
} from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3.75} rotation={[0, 1.2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={props.color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.3}
          map={decal}
        />
      </mesh>
    </Float>
  );
};



const BallCanvas = ({ icon, color }) => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
        />
        <Ball imgUrl={icon} color={color} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}


export default BallCanvas