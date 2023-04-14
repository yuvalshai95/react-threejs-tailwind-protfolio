import { Html, useProgress } from '@react-three/drei';

// This component is a loader for a 3D canvas
const CanvasLoader = () => {
  // useProgress is a hook provided by the drei library to track the loading progress of the 3D assets.
  const { progress } = useProgress();

  return (
    // The Html component from the drei library allows us to render HTML elements within the 3D canvas.
    // We are using it to display a loading spinner and the progress percentage.
    <Html
      as='div'
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>

      {/* This span element will display the loading spinner. */}
      <span className='canvas-loader'></span>

      {/* This paragraph element will display the loading progress percentage. */}
      <p
        style={{
          fontSize: 14,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
