import React, { Suspense } from 'react';
import {Canvas} from 'react-three-fiber'
import Robot from './components/robot';
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
  <>
    <h1>hello wolrd</h1>
    <div style={{width:'100%',height:'80vh'}}>
      <Canvas camera={{zoom:1,position:[15,20,15]}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35,35,0]} intensity={0.4} />
        <pointLight position={[-35,35,0]} intensity={0.4} />
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  </>
  );
}

export default App;
