import { Html, useProgress } from "@react-three/drei"

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
            <p style={{
                fontSize: 14,
                color: '#f1f1f1',
                fontWeight: 600,
                marginTop: 40,
                width: '100%'
            }}>
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
}

export default CanvasLoader