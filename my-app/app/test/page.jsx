'use client'
import React, {useEffect} from 'react'
import {Adam} from '../components/ui/Adam.jsx'
import { Canvas, useFrame } from '@react-three/fiber';
//import adam from '@/public/Assets/adam.glb'
import { OrbitControls } from '@react-three/drei';
const page = () => {
  
  return (
    <div id="canvas-container" style={{width:'100vw', height:'60vw'}}>
      <Canvas > {/** ini equivalent kea yg di bawah*/}
        <OrbitControls />
        <Adam />
      </Canvas>
    </div>
  )
}

export default page