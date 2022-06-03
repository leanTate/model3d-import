import React, { Suspense } from 'react';
import {Canvas} from 'react-three-fiber'
import Robot from './components/robot';
import { OrbitControls } from '@react-three/drei';
import './app.css';
import { Camera } from 'three';
function App() {
  return (
    Camera.DefaultUp.set(0, 1, 0),
  <div className='card'>
    <div>
      <h1>Robotox</h1>
      <div className='card-container'>
        <Canvas className='Card' camera={{zoom:2 ,position:[8,10,15]}}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35,35,0]} intensity={0.4} />
          <pointLight position={[-35,35,0]} intensity={0.4} />
          <Suspense fallback={null}>
            <Robot />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  </div>
  );
}

export default App;
