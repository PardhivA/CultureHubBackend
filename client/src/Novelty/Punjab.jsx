/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Punjab.glb 
*/

import React, { useRef } from "react";
import {
  Decal,
  PerspectiveCamera,
  PositionalAudio,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { LotusTemple } from "./Lotus_temple";
// import { IndiaGate } from "./IndiaGate";
import { MOUSE } from "three";
import { GoldenTemple } from "./GoldenTemple";
import { useEffect } from "react";
import { useState } from "react";

const Punjab = (props) => {
  const { nodes, materials } = useGLTF("/Punjab.glb");
  const v1 = [
    "./Photos/Punjab/Dance/d1.jpeg",
    "./Photos/Punjab/Dance/d2.jpg",
    "./Photos/Punjab/Dance/d3.jpg",
    "./Photos/Punjab/Dance/d4.jpeg",
  ];

  const v2 = [
    "./Photos/Punjab/Festivals/f1.jpeg",
    "./Photos/Punjab/Festivals/f2.jpeg",
    "./Photos/Punjab/Festivals/f3.jpg",
    "./Photos/Punjab/Festivals/f4.jpeg",
  ];

  const v3 = [
    "./Photos/Punjab/Food/f1.jpeg",
    "./Photos/Punjab/Food/f2.jpg",
    "./Photos/Punjab/Food/f3.jpg",
    "./Photos/Punjab/Food/f4.jpeg",
  ];

  const v4 = [
    "./Photos/Punjab/Temple/t1.jpeg",
    "./Photos/Punjab/Temple/t2.jpeg",
    "./Photos/Punjab/Temple/t3.jpeg",
    "./Photos/Punjab/Temple/t4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % v1.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const texture = useTexture(v1[currentIndex]);
  const texture1 = useTexture(v2[currentIndex]);
  const texture2 = useTexture(v3[currentIndex]);
  const texture3 = useTexture(v4[currentIndex]);

  return (
    // <Canvas
    //   style={{
    //     width: "100%",
    //     height: "100%",
    //     position: "fixed",
    //     top: 0,
    //     left: 0,
    //     overflow: "hidden",
    //   }}
    //   camera={{ position: [-20, 0, 0] }}
    // >
    <>
      {/* <PerspectiveCamera lookAt={}/> */}
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} color={"gold"} />
      <PositionalAudio autoplay loop url="/Punjab.mp3" distance={2.5} />
      <OrbitControls
        enablePan={true}
        enableRotate={true}
        autoRotate={true}
        panSpeed={0.5}
        autoRotateSpeed={1}
        maxDistance={15}
        mouseButtons={{
          LEFT: MOUSE.LEFT,
          UP: MOUSE.UP,
          RIGHT: MOUSE.RIGHT,
          BOTTOM: MOUSE.BOTTOM,
        }}
      />
      <GoldenTemple />
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        />

        {/* <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}

/> */}
        <mesh scale={41} position={[3, 10, 20]} rotation-y={1 * Math.PI}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
          >
            <meshBasicMaterial map={texture1} />
          </Decal>
        </mesh>

        {/* <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.002"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        > */}
        <mesh scale={41} position={[3, 10, -20]}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            // Makes "bounding box" of the decal visible
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // The mesh should take precedence over the original
          >
            <meshBasicMaterial
              // scale={5}
              map={texture}
              // polygonOffset
              // polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>

        {/* <mesh
          geometry={nodes.Cube004.geometry}
          material={materials["Material.003"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        /> */}

        <mesh scale={41} position={[23, 10, 0]} rotation-y={1.5 * Math.PI}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            // Makes "bounding box" of the decal visible
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // The mesh should take precedence over the original
          >
            <meshBasicMaterial
              // scale={5}
              map={texture2}
              // polygonOffset
              // polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>

        {/* <mesh
          geometry={nodes.Cube005.geometry}
          material={materials["Material.004"]}
          position={[20, 0, 0]}
          rotation-x={Math.PI}
          scale={20}
        /> */}
        <mesh scale={41} position={[-16.5, 10, 0]} rotation-y={2.5 * Math.PI}>
          <planeGeometry />
          <meshBasicMaterial />
          <Decal
            // Makes "bounding box" of the decal visible
            position={[0, 0, 0]} // Position of the decal
            rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
            scale={1} // Scale of the decal
            // The mesh should take precedence over the original
          >
            <meshBasicMaterial
              // scale={5}
              map={texture3}
              // polygonOffset
              // polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>
      </group>{" "}
    </>
    // {/* </Canvas> */}
  );
};

useGLTF.preload("/Punjab.glb");
export default Punjab;
