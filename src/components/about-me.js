import React from "react";
import { useCallback, useMemo, useRef, useState, useEffect} from 'react';
import jonah from '../assets/jonah.jpg';
import * as THREE from 'three'

// R3F
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Html, Box, Plane } from "@react-three/drei";
//Components
import { Section } from "./section";
//Intersection Observer
import { useInView } from "react-intersection-observer";


export default function AbtMe ({domContent, position, children, bgColor, object}) {
    const ref = useRef();
    const boxRef = useRef();
    useFrame(() => {
      boxRef.current.rotation.y += 0.002;
    });
    const [refItem, inView] = useInView({ threshold: 0});
    useEffect(() => {
      inView && (document.getElementsByClassName('anim')[0].style.background = bgColor)
      for (const x of Array(5).keys()) {inView && (document.getElementsByTagName('a')[x].style.color = "white");}

    }, [inView]);
    const texture = useLoader(THREE.TextureLoader, jonah)
    return (
      <Section factor={1.5} offset={1} >
        <group position={[0, position, 0]}>
        <mesh ref={ref} position={[0, 5, 0]}>
        <Box ref={boxRef} args={[17, 17, 17]} radius={0} position={[65, 10, 30]}>
          <meshStandardMaterial attach="material" map={texture} />
        </Box>
          </mesh>
        <Html fullscreen portal={domContent}>
          <div id="AbtMe" ref={refItem} className = "container">
               {children}
            </div>
          </Html>
        </group>
      </Section>
    );
  }