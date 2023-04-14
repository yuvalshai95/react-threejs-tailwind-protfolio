import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../loader';

/* 

This code defines a React component that renders a 3D scene using the react-three-fiber library, which is a React renderer for the popular 3D library Three.js. 
The scene contains a 3D model of computers and some controls for interacting with the scene.
Overall, this code sets up a 3D scene with a model of computers and allows the user to interact with the scene by rotating it horizontally. It also shows a loader while the model is being loaded and preloads all assets for better performance.

The <Canvas> component sets up the rendering context for the 3D scene. It has several properties:
* framework='demand': This tells the renderer to only update the scene when needed, instead of continuously rendering frames.

* shadows: This enables shadow rendering in the scene.

* dpr={[1, 2]}: This sets the device pixel ratio for the renderer, which affects the resolution of the rendered image.

* camera={{ position: [20, 3, 5], fov: 25 }}: This sets up the camera's initial position and field of view (fov) for the scene.

* gl={{ preserveDrawingBuffer: true }}: This tells the WebGL context to preserve the drawing buffer, which can be useful for taking screenshots or other post-processing tasks.

The <Suspense> component is a React built-in component that allows you to display a fallback component (in this case, 
<CanvasLoader />) while waiting for a child component to load. In this case, it's used to show a loader while the 3D model of computers is being loaded.

The <OrbitControls> component provides user interaction controls for the scene, such as rotating, zooming, and panning. 
In this case, zooming and panning are disabled, and the polar angle is limited to a specific range, which means the user can only rotate the scene horizontally.

The <Computers> component is a custom component that renders the 3D model of computers in the scene. It receives a prop 
isMobile, which can be used to adjust the rendering or interaction based on whether the user is on a mobile device or not.

The <Preload all /> component preloads all the assets used in the scene, which can help improve performance and reduce loading times.

*/

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.67 : 0.75}
        position={isMobile ? [0, -2.8, -2.2] : [0, -3.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      framework='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false} // Disable panning (mouse right click dragging the canvas around)
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
