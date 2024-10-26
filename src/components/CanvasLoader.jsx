import { Html, useProgress } from "@react-three/drei";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";

const CanvasLoader = ({ setModelLoaded }) => {
    const { progress } = useProgress();

    useEffect(() => {
        // Trigger setModelLoaded(true) when progress reaches 100%
        if (progress === 100) {
            setModelLoaded(true);
        }
    }, [progress, setModelLoaded]);

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <span className="canvas-loader" />
            <Progress value={progress} className="bg-white w-60" />
            <p style={{
                fontSize: 14,
                color: '#ffffff',
                fontWeight: 600,
                marginTop: 40,
                width: '100%'
            }}>
                {progress !== 0 ? `${progress.toFixed(0)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default CanvasLoader;
