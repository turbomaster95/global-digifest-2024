import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useGLTF } from '@react-three/drei';

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

export const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/boizroom-transformed.glb');
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0.281, 0.743, 0.901]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.001}>
        <lineSegments geometry={nodes.Mesh292.geometry} material={materials.PaletteMaterial001} />
        <points geometry={nodes.Mesh292_1.geometry} material={materials.PaletteMaterial001} />
      </group>
      <mesh geometry={nodes.workplace_1027.geometry} material={materials.PaletteMaterial001} position={[-0.285, 0.258, 1.359]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.001} />
      <mesh geometry={nodes.Workplace_017.geometry} material={materials.PaletteMaterial002} position={[-0.097, 0.888, 0.901]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.001} />
      <group position={[0.17, 0.85, 0.381]} rotation={[2.675, 1.376, -2.683]} scale={0}>
        <mesh geometry={nodes.Mesh289.geometry} material={materials['Panel_01.001']} />
        <mesh geometry={nodes.Mesh289_1.geometry} material={materials['Keyboards.001']} />
        <mesh geometry={nodes.Mesh289_2.geometry} material={materials['Keyboard_body.001']} />
        <mesh geometry={nodes.Mesh289_3.geometry} material={materials['Keyboard_side.001']} />
      </group>
      <group position={[0.175, 0.841, -0.099]} rotation={[0, 1.396, 0]} scale={0.001}>
        <mesh geometry={nodes.Mesh290.geometry} material={materials['Pad_cover.001']} />
        <mesh geometry={nodes.Mesh290_1.geometry} material={materials.PaletteMaterial003} />
        <mesh geometry={nodes.Mesh290_2.geometry} material={materials.PaletteMaterial004} />
      </group>
      <mesh geometry={nodes.Object174069016.geometry} material={materials['19 - CoronaMtl.001']} position={[-0.166, 0.985, 0.056]} rotation={[0, 1.484, 0]} scale={0.001} />
      <mesh geometry={nodes.Object174069017001.geometry} material={materials['19 - CoronaMtlsd.002']} position={[-0.112, 0.985, 0.756]} rotation={[0.061, -1.423, 0.094]} scale={0.001} />
      <mesh geometry={nodes.Workplace_005.geometry} material={materials.PaletteMaterial008} position={[-0.166, 0.985, 0.056]} rotation={[0, 1.484, 0]} scale={0.001} />
      <group position={[0.862, 1.1, 1.042]} rotation={[1.708, -0.066, 2.697]} scale={0.001}>
        <mesh geometry={nodes.Mesh323.geometry} material={materials['DXSEAT P-class.001']} />
        <mesh geometry={nodes.Mesh323_1.geometry} material={materials.PaletteMaterial005} />
      </group>
      <mesh geometry={nodes.Plane082.geometry} material={materials.PaletteMaterial006} position={[0.909, 1.347, 1.14]} rotation={[Math.PI, 1.121, 1.573]} scale={0.001} />
      <mesh geometry={nodes.Circle050.geometry} material={materials['02 - Default-.001']} position={[-0.236, 1.291, -0.422]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={0.001} />
      <mesh geometry={nodes.Circle051.geometry} material={materials['02 - Default-_.001']} position={[-0.257, 1.291, -0.422]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-0.001, 0.001, 0.001]} />
      <mesh geometry={nodes.Sphere028.geometry} material={materials.PaletteMaterial007} position={[-0.243, 1.337, -0.376]} rotation={[-2.356, 0, -Math.PI / 2]} scale={0.001} />
      <mesh geometry={nodes.Line018.geometry} material={materials['Panel.001']} position={[0.215, 1.449, -0.457]} rotation={[Math.PI / 2, 1.117, -Math.PI / 2]} scale={0.001} />
      <mesh geometry={nodes.Minotti_Beats_logo.geometry} material={materials['metal_nikel.001']} position={[0.168, 0.9, 1.028]} rotation={[2.852, 0.979, -1.299]} scale={0.001} />
    </group>
  );
});


