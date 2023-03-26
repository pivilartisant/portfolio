import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense } from "react";


export  function AboutScene() {
  return (
    <div className="about-scene">
      <Canvas className="about-canvas" camera={{ fov: 75, position: [-6, 2.6, 10]}} >

        <Suspense fallback={null}>

          <pointLight position={[4, 10, 10]} intensity={0.7}/>
          <pointLight position={[-4, 10, 10]} intensity={0.3}/>
        
           {/* <FlowerModel position={[0, 0, 0]}/> */}
          <OrbitControls />
        </Suspense> 
      </Canvas>
    </div>
  );
}
