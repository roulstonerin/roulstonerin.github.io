import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import LaptopErin from '../../assets/images/me with computer.png';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


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

                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erinroulston/">
                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/roulstonerin">
                                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                            </a>
                        </li>
                    </ul>
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

