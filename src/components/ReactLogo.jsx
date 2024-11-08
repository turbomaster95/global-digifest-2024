import { useGLTF, Float } from '@react-three/drei'

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/react.glb')
    return (
        <Float floatIntensity={2}>
            <group {...props} scale={0.5} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/react.glb')

export default ReactLogo;