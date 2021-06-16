import React from "react";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { useRef } from 'react';
extend({OrbitControls})


export default function CameraControls(){
  const {
    camera,
    gl: {domElement}
  } = useThree();

  const controlsRef = useRef();
  //useFrame(() => controlsRef.current.update())

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.5}
      maxDistance = {170}
      zoomSpeed = {0.20}
      minPolarAngle = {1.45}
      maxPolarAngle = {1.45}

    />
  );
}