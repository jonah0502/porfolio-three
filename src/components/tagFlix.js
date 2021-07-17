import React from "react";
import { Suspense } from 'react';
import { useCallback, useMemo, useRef, useState, useEffect} from 'react';
import tag from '../assets/tagSphere.png';
import * as THREE from 'three'
import Button from 'react-bootstrap/Button';

// R3F
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Html, Box, Plane, Sphere, MeshWobbleMaterial } from "@react-three/drei";
//Components
import { Section } from "./section";

//Intersection Observer
import { useInView } from "react-intersection-observer";

import Float from "./Float.js";


export default function TagFlix ({domContent, position, children, bgColor, object}) {
    const ref = useRef();
    const sphereRef = useRef();
    useFrame(() => {
        sphereRef.current.rotation.y += 0.004;
    });
    const [refItem, inView] = useInView({ threshold: 0.5});
    useEffect(() => {
      inView && (document.getElementsByClassName('anim')[0].style.background = bgColor)
      for (const x of Array(4).keys()) {inView && (document.getElementsByTagName('a')[x].style.color = "black");}
      document.getElementsByClassName('logo')[0].style.color = "black"
    }, [inView]);
    const texture = useLoader(THREE.TextureLoader, tag)
    return (
      <Section factor={1.5} offset={1} >
        <group position={[0, position, 0]}>
        <mesh ref={ref} >

        <Suspense fallback={null}>
        </Suspense>
        <Sphere ref={sphereRef} visible position={[82, 22, 20]} args={[4, 16, 16]}>
            <MeshWobbleMaterial
        attach="material"
        color="#FFFFFF"
        factor={0.05} // Strength, 0 disables the effect (default=1)
        speed={2} // Speed (default=1)
        roughness={0}
        map={texture}
        />
        </Sphere>
          </mesh>
        <Html fullscreen portal={domContent}>
          <div id="TagFlix" ref={refItem} className = "container">
               {children}
            </div>
          </Html>
        </group>
      </Section>
    );
  }