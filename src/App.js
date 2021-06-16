import React from "react";
import "./App.scss";
import { Suspense } from 'react';
import { useCallback, useMemo, useRef, useState, useEffect} from 'react';

// R3F
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { Html, useProgress, useGLTFLoader } from "drei";
//Components
import Header from "./components/header";
import Points from "./components/points.js";
import CameraControls from "./components/cameraControls.js"
import { Section } from "./components/section";
import Camera from "./components/camera.js"

// Page State
import state from "./components/state";
// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";



const HTMLContent = (domContent) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.002));

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 265, 0]}>
      <mesh ref={ref} position={[0, -35, 0]}>
           <Points />
        </mesh>
      <Html fullscreen portal={domContent}>
        <div className = "container">
          <h1 className="title">Jonah's Webpage</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}

function AnimationCanvas() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
    <Canvas
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
    >

      <Suspense fallback={null}>

      <HTMLContent 
      domContent={domContent}
/>

      </Suspense>
    </Canvas>
          <div
          className='scrollArea'
          ref={scrollArea}
          onScroll={onScroll}
          {...events}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${state.sections * 100}vh` }} />
        </div>
      </>
  );
}


function App() {
  return (
    <div className="anim">
      <Suspense fallback={<div>Loading...</div>}>
      <Header />
        <AnimationCanvas  />
      </Suspense>
    </div>
  );
}

export default App;