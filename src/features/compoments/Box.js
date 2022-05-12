import React, { useState } from 'react'
import { useLoader } from '@react-three/fiber' 
// import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from '../img/map.jpg'
// import { useSpring, a } from 'react-spring/three'

export default function Box(){
    // const textureLoader = THREE.TextureLoader()
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    const colorMap = useLoader(TextureLoader,texture)

    // const props = useSpring({

    // })

    return <mesh 
        onPointerOver={()=>setHovered(true)}
        onPointerOut={()=>setHovered(false)}
        onClick={()=>{setClicked(true)}}
        
    >
        <boxBufferGeometry attach='geometry' args={[3,3,3]} />
        {/* <meshLambertMaterial attach='material' color="blue" /> */}
        {/* <meshStandardMaterial map={colorMap} /> */}
        <meshNormalMaterial attach='material'  />
        <meshBasicMaterial attach='material' color={hovered? "hotpink" : "gray"}  />
    </mesh>
}