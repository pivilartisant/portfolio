import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { ComputerModel } from "./Cmpt";
// import { OldComputer } from "./OldCompter";
import "./computer.css";


export  function ComputerScene() {
  return (
    <div className="computer-scene">
      <Canvas className="computer-canvas">
        <Suspense fallback={null}>
          <pointLight position={[4, 10, 10]} intensity={0.7}/>
          <pointLight position={[-4, 10, 10]} intensity={0.3}/>
          <ComputerModel position={[0, -1.5, 0]}/>
          <OrbitControls enableZoom={false}/>
        </Suspense> 
      </Canvas>
    </div>
  );
}
