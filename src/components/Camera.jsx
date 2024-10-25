import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        // Move the camera closer to the model
        easing.damp3(state.camera.position, [0, 0, 5], 0.25, delta); // Adjust '5' for desired distance

        if (!isMobile) {
            easing.dampE(
                groupRef.current.rotation,
                [-state.pointer.y / 3, state.pointer.x / 5, 0],
                0.25,
                delta
            );
        }
    });

    return (
        <group ref={groupRef} scale={1}> {/* Set scale to 1 */}
            {children}
        </group>
    );
};

export default HeroCamera;
