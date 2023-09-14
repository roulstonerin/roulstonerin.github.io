import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import LaptopErin from '../../assets/images/me with computer.png';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(idTimeOut);
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>
                <img className="laptop-Erin" src={LaptopErin} alt="Cartoon Erin with a laptop" width="235.25pt" height="360.75pt"></img>

                <div className="fakeMenu-container">
                    <div className="terminal">
                        <div className="fakeMenu">
                            <div className="fakeButtons fakeClose"></div>
                            <div className="fakeButtons fakeMinimize"></div>
                            <div className="fakeButtons fakeZoom"></div>
                        </div>
                        <div className="fakeScreen">
                            <p className="line1">$ I took my first Computer Science class in high school over 8 years ago, and since then
                                have fallen in love with Programming and Design!</p>
                            <p className="line2">$ I graduated from the Department
                                of Systems Design Engineering at the University of Waterloo in 2022, and since then, have been working as a software engineer at Vivosonic.</p>
                            <p className="line3">$ I have worked as a Software Engineer, Full-Stack Web Developer, and UI/UX Designer, using tools like TypeScript/JavaScript, C#, C++, Figma, React, and Angular to get big projects up and running.</p>
                            <p className="line1">$ I am currently seeking new opportunities to further my career in Software Development. I would love to chat if you have any questions or would like to connect!</p>
                            <p className="line4">&gt;<span class="cursor1">_</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="line-spin-fade-loader" />
        </>
    )
}

export default About







{/* <p>
                        Currently I am working as a Software Engineer, and in the past I have worked as a Full-Stack Web developer,
                        UI/UX designer, and even a Hardware Researcher! My love for learning and ambitious attitude inspires me to
                        never stop trying new things. It helps that I graduated from the Dept. of Systems Design Engineering at the University
                        of Waterloo, which i
                    </p>
                    <p>
                        I graduated from the Department of Systems Design Engineering at the University
                        of Waterloo with a degree in Biomedical Engineering. The multidisciplinary nature of this program means
                        I have experience working with hardware (analog / digital circuits), programming (data structures & algorithms),
                        and design (human factors). I love working on technical projects and have a deep
                        appreciation for user-centered design.
                    </p>
                    <p>I am a very ambitious developer looking for a role in
                        established IT company with the opportunity to work with the
                        latest technologies on challenging and diverse projects.
                    </p>
                    <p>I'm quietly confident, naturally curious, and perpetually working
                        on improving my chops one design problem at a time.
                    </p>
                    <p>If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p> */}