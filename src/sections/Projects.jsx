import { Suspense, useState } from 'react'
import { myProjects } from '../constants/index.js'

import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';


const Projects = () => {
    const projectCount = myProjects.length;

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const current = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'prev') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

    return (
        <section className='c-space my-20'>
            <p className='head-text'>
                My Work
            </p>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12 w-full' id="work">
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={current.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />

                    </div>
                    <div className='p-3 backdrop-filter backdrop-blur-3xl rounded-lg w-fit' style={current.logoStyle}>
                        <img src={current.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                    </div>

                    <div className='flex flex-col gap-5 text-white-600 my-5'>
                        <p className='text-white animatedText text-2xl font-semibold'>{current.title}</p>

                        <p className='animatedText'>{current.desc}</p>
                        <p className='animatedText'>{current.subdesc}</p>
                    </div>


                    <div className='flex items-center justify-between gap-5 flex-wrap'>
                        <div className='flex items-center gap-3'>
                            {current.tags.map((tag, index) => (
                                <div key={index} className='tech-logo w-6 h-6'>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a href={current.href} target="_blank" className='flex items-center text-white-600 cursor-pointer gap-2'>
                            <p >Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className='h-3 w-3' />
                        </a>
                    </div>

                    <div className='flex justify-between items-center mt-7'>
                        <button className='arrow-btn' onClick={() => handleNavigation('prev')}>
                            <img src='/assets/left-arrow.png' className='w-4 h-4' alt='left-arrow' />
                        </button>

                        <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                            <img src='/assets/right-arrow.png' className='w-4 h-4' alt='right-arrow' />
                        </button>
                    </div>
                </div>


                <div className='border border-black-300 bg-black-200 h-96 w-full md:h-full rounded-lg'>
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />

                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={current.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects