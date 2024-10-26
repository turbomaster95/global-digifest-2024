import { Html, useProgress } from "@react-three/drei"
import { Progress } from "@/components/ui/progress"

const CanvasLoader = () => {
    const { progress } = useProgress()

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
            <Progress value={progress} className="dark:invert bg-white" />
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
    )
}

export default CanvasLoader