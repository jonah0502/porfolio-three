import React from "react";
import "./App.scss";
import { Suspense } from 'react';
import { useCallback, useMemo, useRef, useState, useEffect} from 'react';
import jonah from './assets/jonah.jpg';
import * as THREE from 'three'
import 'bootstrap/dist/css/bootstrap.min.css';

// R3F
import { Canvas, useFrame, useThree, useLoader } from "react-three-fiber";
import { Html, Box, Plane, useProgress, useGLTFLoader } from "drei";
//Components
import Header from "./components/header";
import Points from "./components/points.js";
import CameraControls from "./components/cameraControls.js"
import { Section } from "./components/section";
import Camera from "./components/camera.js"
import Buttons from "./components/button.js"
// Page State
import state from "./components/state";
// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};


const Homepage = ({domContent, position, children}) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.002));
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
      <mesh ref={ref} position={[0, -35, 0]}>
           <Points />
        </mesh>
      <Html fullscreen portal={domContent}>
        <div className = "container">
             <h1 className="title">{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}

const PorfolioItem = ({domContent, position, children, bgColor, object}) => {
  const ref = useRef();
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.y += 0.001;
  });
  const [refItem, inView] = useInView({ threshold: 0});
  useEffect(() => {
    inView && (document.getElementsByClassName('anim')[0].style.background = bgColor);
  }, [inView]);
  const texture = useLoader(THREE.TextureLoader, jonah)
  return (
    <Section factor={1.5} offset={1} >
      <group position={[0, position, 0]}>
      <mesh ref={ref} position={[0, 0, 0]}>
      <Box ref={boxRef} args={[17, 17, 17]} radius={0} position={[65, 0, 35]}>
        <meshStandardMaterial attach="material" map={texture} />
      </Box>
        </mesh>
      <Html fullscreen portal={domContent}>
        <div ref={refItem} className = "container">
             {children}
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
      concurrent
      colorManagement
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
    <Lights />

      <Suspense fallback={null}>

      <Homepage 
      domContent={domContent}
      position = {265}>
        <span>Jonah's Webpage</span>
        </Homepage>
        <PorfolioItem 
      domContent={domContent}
      position = {0}
      bgColor='#000000'>
      <h1 className = "abtMe"><span>About Me</span></h1>
      <Buttons />
        </PorfolioItem>
        <PorfolioItem 
      domContent={domContent}
      position = {-250}
      bgColor='#FFFFFF'>
      <h1 className = "title" style = {{color:"black"}}><span>TagFlix</span></h1>
        </PorfolioItem>
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