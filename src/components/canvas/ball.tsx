import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import CanvasLoader from '../loader';

// TODO: move to interface folder
export interface IBallCanvasProps {
  icon: string;
}

export interface IBallProps {
  imgUrl: string;
}

const Ball = ({ imgUrl }: IBallProps) => {
  // Load the texture from the provided image URL
  const [decal] = useTexture([imgUrl]);

  return (
    // Float component makes the ball float and rotate
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient light creates overall lighting */}
      <ambientLight intensity={0.25} />

      {/* Directional light creates shadows */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* Mesh defines the 3D shape of the ball */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* IcosahedronGeometry defines the shape of the mesh */}
        <icosahedronGeometry args={[1, 1]} />

        {/* MeshStandardMaterial defines the material of the mesh */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset // Move the material slightly closer to the camera to prevent z-fighting
          polygonOffsetFactor={-5} // Amount to move the material
          flatShading // Disable smooth shading
        />

        {/* Decal applies the texture to the mesh */}
        <Decal
          position={[0, 0, 1]} // Position of the decal relative to the mesh
          rotation={[2 * Math.PI, 0, 6.25]} // Rotation of the decal
          scale={1} // Scale of the decal
          map={decal} // Texture to apply to the decal
          flatShading // Disable smooth shading
        />
      </mesh>
    </Float>
  );
};


const BallCanvas = ({ icon }: IBallCanvasProps) => {
  return (
    // Canvas is the main 3D rendering component
    <Canvas
      framework='demand' // Choose the Three.js rendering framework
      dpr={[1, 2]} // Device pixel ratio (useful for retina displays)
      gl={{ preserveDrawingBuffer: true }} // Preserve drawing buffer (useful for taking screenshots)
    >
      {/* Suspense component suspends rendering and shows a fallback component until data is loaded */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls component allows the user to interact with the 3D scene */}
        <OrbitControls
          enableZoom={false} // Disable zooming (scroll wheel)
          enablePan={false} // Disable panning (mouse right click dragging the canvas around)
        />
        {/* Ball component defines the 3D ball to be rendered */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload component preloads assets to prevent stuttering during rendering */}
      <Preload all />
    </Canvas>
  );
};


export default BallCanvas;
