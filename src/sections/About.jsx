import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'


const About = () => {
    const [copy, setCopy] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('admin@coderrrrr.site');

        setCopy(true)

        setTimeout(() => {
            setCopy(false)
        }, 2000);
    }


    return (

        <section className='c-space my-20' >

            <p className='head-text my-20'>
                About Me
            </p>

            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full' id='about'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] object-contain h-fit' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Deva Midhun</p>
                            <p className='grid-subtext'>I'm a designer and developer crafting intuitive, beautiful digital experiences with code.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] object-contain h-fit' />

                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in Javascript with a focus on React and Next JS ecosystem.</p>
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] flex justify-center items-center h-fit'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                        <div>
                            <p className='grid-headtext'>I work remotely in most timezones.</p>
                            <p className='grid-subtext'>I'm based in India, available to work remotely.</p>
                            <a href='https://discordapp.com/users/765881288740569088' target="_blank" rel="noopener noreferrer">
                                <Button name="Get in touch" containerClass="w-full mt-10" isBeam />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='h-fit sm:h-[276px] object-contain w-full' />

                        <div>
                            <p className='grid-headtext'>My Passion for Coding</p>
                            <p className='grid-subtext'>I love designing and building things through coding. Coding isn't just my profession - its my passion.</p>
                        </div>
                    </div>
                </div>

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>

                            <div className="copy-container" onClick={handleCopy}>
                                <img src={copy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">admin@coderrrrr.site</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About