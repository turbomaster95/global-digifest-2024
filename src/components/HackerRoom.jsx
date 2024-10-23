// import { useGLTF, useTexture } from '@react-three/drei';

// const HackerRoom = (props) => {
//   const { nodes, materials } = useGLTF('/models/hacker-room.glb');

//   const monitortxt = useTexture('textures/desk/monitor.png');
//   const screenTxt = useTexture('textures/desk/screen.png');

//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
//         <meshMatcapMaterial map={screenTxt} />
//       </mesh>
//       <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
//       <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
//       <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
//         <meshMatcapMaterial map={monitortxt} />
//       </mesh>
//       <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
//       <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
//       <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
//       <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
//       <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
//       <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
//         <meshMatcapMaterial map={monitortxt} />
//       </mesh>
//       <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
//       <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
//       <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
//       <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
//     </group>
//   );
// }

// useGLTF.preload('/models/hacker-room.glb');

// export default HackerRoom;



import { useGLTF, useTexture } from '@react-three/drei'

const HackerRoom = (props) => {

  const texture = useTexture('textures/desk/screen.png')


  const { nodes, materials } = useGLTF('/models/office_computer.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, Math.PI / 2, 0]}>
        <group rotation={[0, Math.PI / 2, 0]}>
          <group position={[40.574, 21.542, 8.922]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-36.625, -67.542, -31.299]}
              scale={[1.414, 1, 1.702]}
            />

            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_1.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 0.892, -26.24]}
              scale={[0.074, 2.084, 0.257]}
            />

            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_2.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 0.892, -14.175]}
              scale={[0.074, 1.859, 0.727]}
            />

            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_3.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 0.892, 12.469]}
              scale={[0.074, 2.084, 0.257]}
            />

            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_4.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 36.798, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_5.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 30.411, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_6.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -35.496, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_7.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -29.109, -18.901]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_8.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -35.496, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_9.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -29.109, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_10.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 30.169, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_11.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 36.556, 7.242]}
              scale={[0.044, 0.063, 0.212]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_12.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 43.392, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_13.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, 43.392, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_14.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -41.96, -11.557]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_15.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-60.47, -41.96, 3.392]}
              scale={[0.044, 0.217, 0.076]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_16.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-53.04, -68.976, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_17.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-21.89, 0, 29.697]}
              scale={[1.414, 1.378, 0.174]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_18.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-53.04, 71.314, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_19.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, 80.502, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_20.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, -81.085, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_21.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, -53.294, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_22.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-29.405, 54.493, 14.92]}
              scale={[0.247, 0.247, 0.715]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_23.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[30.497, 72.436, -31.299]}
              scale={[1.933, 0.823, 1.189]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_24.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[49.384, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_25.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[49.384, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_26.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[11.136, 50.312, -10.65]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_27.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[11.136, 50.312, -25.213]}
              scale={[0.754, 0.448, 1.275]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC0353_28.geometry}
              material={materials.MaterialFBXASC032FBXASC0353}
              position={[-36.625, 68.886, -31.299]}
              scale={[1.414, 1, 1.702]}
            />
          </group>
          <group position={[69.022, 39.481, 21.318]} rotation={[-Math.PI / 2, 0, 0]} scale={1.565}>
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC03538.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[-0.223, -0.54, -8.012]}
              scale={[0.284, 0.322, 0.284]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC03538_1.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[-1.664, -17.269, 5.316]}
              rotation={[0, 0, -Math.PI]}
              scale={[-0.444, 0.444, 0.444]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC03538_2.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[-1.664, 15.271, 5.316]}
              scale={0.444}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC03538_3.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[14.432, -0.528, -6.251]}
              rotation={[0, 0.105, 0]}
              scale={[0.06, 0.367, 4.143]}
            />
            <mesh

              geometry={nodes.MaterialFBXASC032FBXASC03538_4.geometry}
              material={materials.MaterialFBXASC032FBXASC03538}
              position={[20.742, 0.194, 5.401]}
              rotation={[0, -1.192, 0]}
              scale={[0.405, 0.405, 0.17]}
            />
          </group>
          <mesh
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1.geometry}
            material={materials.MaterialFBXASC032FBXASC0354_ncl1_1}
            position={[16.037, 50.997, -18.414]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.203, 0.243, 0.136]}
          />
          <mesh
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1_1.geometry}
            material={materials.MaterialFBXASC032FBXASC0354_ncl1_1}
            position={[14.69, 51.403, 11.988]}
            rotation={[-Math.PI / 2, 0.147, -Math.PI]}
            scale={[0.53, 0.715, 0.715]}
          />
          <mesh
            geometry={nodes.MaterialFBXASC032FBXASC0352.geometry}
            material={materials.MaterialFBXASC032FBXASC0352}
            position={[76.12, 26.409, -66.145]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[0.514, 0.514, 0.363]}
          />
          <mesh
            geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1_2.geometry}
            material={materials.MaterialFBXASC032FBXASC0354_ncl1_1}
            position={[6.864, 51.118, -34.455]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[0.514, 1.18, 0.514]}
          />
          <mesh
            geometry={nodes.MaterialFBXASC032FBXASC0354.geometry}
            material={materials.MaterialFBXASC032FBXASC0354}
            position={[-22.588, 88.167, 28.596]}
            rotation={[-Math.PI / 2, -0.256, -Math.PI / 2]}
            scale={[0.261, 0.458, 0.458]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/office_computer.glb')

export default HackerRoom;
