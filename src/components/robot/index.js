import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
 
export default function Robot({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/robot_lean.gltf')
  return (
    <group ref={group} {...props} dispose={null} position={[1,-4,0]}>
      <group position={[-2.56, 6.64, -0.67]} rotation={[-Math.PI, 1.13, 3.07]} scale={[0.07, 0.1, 0.07]}>
        <primitive object={nodes.Bone001} />
        <skinnedMesh geometry={nodes.Cube003.geometry} material={materials['Material.008']} skeleton={nodes.Cube003.skeleton} />
      </group>
      <group position={[0.98, 6.8, -0.64]} rotation={[0, 1.13, -Math.PI]} scale={[-0.07, -0.09, -0.07]}>
        <primitive object={nodes.Bone001_1} />
      </group>
      <mesh geometry={nodes.Cubo004.geometry} material={materials['Material.005']} position={[-0.59, 7.11, -1.08]} rotation={[0.17, 0, 0]} scale={[0.74, 0.16, -0.03]}>
        <mesh geometry={nodes.Cubo.geometry} material={materials['Material.004']} position={[0, 6.44, -3.58]} scale={[1.01, 4.11, 4.67]} />
        <mesh geometry={nodes.Cubo001.geometry} material={materials['Material.002']} position={[0, 5.09, 22.41]} rotation={[0, 0, -Math.PI]} scale={[-1.01, -6.07, -21.36]} />
        <mesh geometry={nodes.Cubo002.geometry} material={materials['Material.003']} position={[-0.49, 7.22, -2.78]} rotation={[Math.PI, 0, 0]} scale={[-0.06, -0.67, -6.11]} />
        <mesh geometry={nodes.Cubo003.geometry} material={materials['Material.002']} position={[0, 1.67, -2.39]} rotation={[0, 0, -Math.PI]} scale={[-1.01, -0.67, -3.39]} />
        <mesh geometry={nodes.Cubo007.geometry} material={materials['Material.003']} position={[0.28, 7.22, -5.78]} rotation={[Math.PI, 0, 0]} scale={[-0.06, -0.67, -3.39]} />
        <mesh geometry={nodes.Plano003.geometry} material={materials['Material.007']} position={[0.06, 5.55, -9.32]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-0.69, -19.85, -3.11]} />
      </mesh>
      <group position={[-8.43, 4.61, 0.24]} rotation={[-Math.PI / 4, 0, 0]}>
        <mesh geometry={nodes.Círculo_1.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Círculo_2.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.Círculo001.geometry} material={materials['Material.010']} position={[0.42, 5.73, -0.89]} rotation={[-Math.PI / 4, 0, 0]} scale={0.3} />
      <mesh geometry={nodes.Círculo002.geometry} material={materials['Material.010']} position={[-1.81, 5.73, -0.89]} rotation={[-Math.PI / 4, 0, 0]} scale={0.3} />
      <mesh geometry={nodes.Círculo005.geometry} material={materials['Material.008']} position={[-0.49, 5.71, 1.73]} rotation={[1.75, 0, 0]} />
      <mesh geometry={nodes.Curva_NURBS.geometry} material={materials['Material.009']} position={[-1.89, 6.15, 1.11]} rotation={[-0.24, Math.PI / 2, 0]} />
      <group position={[-0.74, 6.29, 1.61]} scale={[1.2, 0.11, 0.91]}>
        <mesh geometry={nodes.Cubo006_1.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Cubo006_2.geometry} material={materials['Material.016']} />
      </group>
      <group position={[-0.81, 7.29, 2.65]} rotation={[1.92, 0, 0]} scale={[1.2, 0.11, 0.91]}>
        <mesh geometry={nodes.Cubo007_1.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cubo007_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cubo007_3.geometry} material={materials['Material.016']} />
      </group>
      <mesh geometry={nodes.Curva_NURBS001.geometry} material={materials['Material.009']} position={[-0.99, 5.45, 3.08]} rotation={[-0.23, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Curva_NURBS003.geometry} material={materials['Material.009']} position={[-0.57, 3.36, 2.95]} rotation={[Math.PI / 6, 1.57, 0]} />
      <mesh geometry={nodes.Rosca001.geometry} material={materials['Material.008']} position={[-1.76, 6.77, 0.93]} rotation={[0, -1.13, -Math.PI / 2]} scale={-0.14} />
      <mesh geometry={nodes.Rosca002.geometry} material={materials['Material.008']} position={[0.21, 6.74, 0.94]} rotation={[Math.PI, -1.13, Math.PI / 2]} scale={-0.14} />
      <mesh geometry={nodes.Curva_NURBS004.geometry} material={materials['Material.009']} position={[0.43, 6.19, 1.14]} rotation={[-0.24, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Círculo003.geometry} material={materials['Material.008']} position={[-0.91, 6.08, 0.24]} rotation={[0.66, 0, 0]} />
      <mesh geometry={nodes.Círculo004.geometry} material={materials['Material.015']} position={[-1.05, 3.99, 4.21]} rotation={[-0.13, 0, 0]}>
        <group position={[0.01, -0.43, 0.31]} rotation={[0.01, 0, 0]} scale={[0.27, 0.59, 0.41]}>
          <mesh geometry={nodes.Círculo008_1.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Círculo008_2.geometry} material={materials['Material.015']} />
          <mesh geometry={nodes.Círculo008_3.geometry} material={materials['Material.006']} />
        </group>
        <mesh geometry={nodes.Plano005.geometry} material={materials['Material.006']} position={[0.02, -0.18, 0.41]} rotation={[0.01, 0, 0]} scale={[-0.09, -0.15, -0.15]} />
      </mesh>
      <mesh geometry={nodes.Círculo006.geometry} material={materials['Material.015']} position={[-0.61, 1.49, 2.76]} rotation={[0.7, 0, 0]}>
        <group position={[0.01, -0.43, 0.31]} rotation={[0.01, 0, 0]} scale={[0.27, 0.59, 0.41]}>
          <mesh geometry={nodes.Círculo010.geometry} material={materials['Material.005']} />
          <mesh geometry={nodes.Círculo010_1.geometry} material={materials['Material.015']} />
          <mesh geometry={nodes.Círculo010_2.geometry} material={materials['Material.006']} />
        </group>
        <mesh geometry={nodes.Plano006.geometry} material={nodes.Plano006.material} position={[0.02, -0.18, 0.42]} rotation={[0.01, 0, 0]} scale={[-0.09, -0.15, -0.15]} />
      </mesh>
      <skinnedMesh geometry={nodes.Cube004.geometry} material={materials['Material.008']} skeleton={nodes.Cube004.skeleton} />
    </group>
  )
}

useGLTF.preload('/robot_lean.gltf')
