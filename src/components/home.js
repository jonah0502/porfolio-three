import React from "react";
import {useRef, useEffect} from 'react';

// R3F
import {useFrame} from "@react-three/fiber";
import { Html} from "@react-three/drei";
//Components
import Points from "./points.js";

import { Section } from "./section";


export default function Homepage ({domContent, position, children}) {
    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.002));
    let amp = 0
    return (
      <Section factor={1.5} offset={1}>
        <group position={[0, position, 0]}>
        <mesh ref={ref} position={[0, -35, 0]}>
             <Points 
             aVar = {amp}
             />
          </mesh>
        <Html fullscreen portal={domContent}>
          <div id="Home" className = "container">
               <h1 className="title">{children}</h1>
            </div>
          </Html>
        </group>
      </Section>
    );
  }