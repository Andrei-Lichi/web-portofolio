"use client"

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment} from '@react-three/drei'

const RenderModel = ({ children }) => {
  return (
    <Canvas className="w-screen h-screen relative" camera={{ position: [0, 2, 10], fov: 50 }}>
      <Suspense fallback={null}>
        {children}
        {}
      </Suspense>
      <Environment preset="studio"/>
    </Canvas>
  )
}

export default RenderModel
