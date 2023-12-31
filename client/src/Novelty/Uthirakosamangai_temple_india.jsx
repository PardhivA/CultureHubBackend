/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 uthirakosamangai_temple_india.glb 
Author: Archéomatique (https://sketchfab.com/archeomatique)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/uthirakosamangai-temple-india-7370565d936e4bad8682c73c645f2f54
Title: Uthirakosamangai temple, India
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TNTemple(props) {
  const { nodes, materials } = useGLTF("/uthirakosamangai_temple_india.glb");
  return (
    <group
      {...props}
      dispose={null}
      scale={1.5}
      position-y={0}
      position-z={0}
      position-x={-25}
      rotation-y={4.8}
    >
      <group position={[-1.219, 12.9, -9.985]} rotation={[-2.39, 0.228, -0.12]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.ramanathapuram_temple}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.ramanathapuram_temple}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.ramanathapuram_temple1}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.ramanathapuram_temple1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/uthirakosamangai_temple_india.glb");
