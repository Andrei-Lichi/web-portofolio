"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/witcher_medallion2.glb")
  const modelRef = useRef()

useFrame((state) => {
  const elapsed = state.clock.getElapsedTime();

  modelRef.current.position.y = Math.sin(elapsed) * 0.2;
  modelRef.current.rotation.y = Math.sin(elapsed * 0.5) * 0.2;
  modelRef.current.rotation.z = Math.sin(elapsed * 0.8) * 0.1;
  modelRef.current.rotation.x = Math.sin(elapsed * 0.3) * 0.1;
});


  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Witcher_medalion_Material001_0.geometry}
        material={materials['Material.001']}
        scale={0.06}
        position={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Witcher_medalion_Material001_0_1.geometry}
        material={materials['Material.001']}
        scale={0.06}
        position={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("/models/witcher_medallion2.glb")
