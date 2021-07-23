import React from "react";
import {useRef, useEffect} from 'react';

// R3F
import {useThree,useFrame} from "@react-three/fiber";
import { Html} from "@react-three/drei";
//Components
import Points from "./points.js";
//import Ame from "./Astronome.js"
import { Section } from "./section";
import {
  CubeTextureLoader,
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter
} from "three";

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg"
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}
// Geometry
function Sphere() {
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));
//TODO: speed up spaceman animation, fix hos positon/size, import other animations
  return (
    <mesh visible scale={[7,7,7]} position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  );
}
export default function Homepage ({domContent, position, children}) {
    const ref = useRef();
    const spaceMan = useRef();

    useFrame(() => (
      ref.current.rotation.y += 0.002
            ));
    let amp = 0
    return (
      <Section factor={1.5} offset={1}>
        <SkyBox/>
        <group position={[0, position, 0]}>
        <mesh ref={ref} position={[0, -35, 0]}>
          <Sphere/>
          <mesh ref={spaceMan}>
        {/*<Ame position={[0, 14, -17]} scale={[25,25,25]} rotation={[-0.7,Math.PI,-0.3]}/>*/}
          </mesh>
             <Points 
             aVar = {amp}
             dotColor = {'#FFFFFF'}
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