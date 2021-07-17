import React from "react";
import { useRef, useEffect} from 'react';
import jonah from '../assets/jonah.jpg';
import * as THREE from 'three'
import moon from '../assets/moon.jpg';
import normal from '../assets/normal.jpg';
import Me from "./Persistance.js";
import { Suspense } from 'react';

// R3F
import { useFrame, useLoader } from "@react-three/fiber";
import { Html, Box, Stars, Sphere } from "@react-three/drei";
//Components
import { Section } from "./section";
//Intersection Observer
import { useInView } from "react-intersection-observer";


export default function AbtMe ({domContent, position, children, bgColor, object}) {
    const ref = useRef();
    const boxRef = useRef();
    const sphereRef = useRef();
    const moonTexture = useLoader(THREE.TextureLoader, moon)
    const normals = useLoader(THREE.TextureLoader, normal);

    useFrame(() => {
      boxRef.current.rotation.y += 0.002;
      //boxRef.current.position.x -= 0.002;
      ref.current.position.y += 0.01
    });
    const [refItem, inView] = useInView({ threshold: 0});
    useEffect(() => {
      inView && (document.getElementsByClassName('anim')[0].style.background = bgColor)
      for (const x of Array(4).keys()) {inView && (document.getElementsByTagName('a')[x].style.color = "white");}
      document.getElementsByClassName('logo')[0].style.color = "white"

    }, [inView]);
    const texture = useLoader(THREE.TextureLoader, jonah)
    return (
      <Section factor={1.5} offset={1} >
        <group position={[0, position, 0]}>
        <mesh  ref={ref}  position={[0, 5, 0]}>        
        <Stars radius={105} depth={50} count={5000} factor={4} saturation={0} fade />
        </mesh>
        <mesh>
        <Suspense fallback={null}>
          {/*<Me position={[95, 0, -0]}/>*/}
        </Suspense>
      <Sphere ref={sphereRef} visible position={[82, 22, 20]} args={[4, 16, 16]}>
          <meshStandardMaterial
      attach="material"
      color="#FFFFFF"
      factor={0.05} // Strength, 0 disables the effect (default=1)
      speed={2} // Speed (default=1)
      roughness={0}
      normalMap={normals}
      map={moonTexture}
      />
      </Sphere>
  </mesh>



        <mesh  position={[0, 5, 0]}>

        <Box ref={boxRef} args={[17, 17, 17]} radius={0} position={[55, 10, 32]}>
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