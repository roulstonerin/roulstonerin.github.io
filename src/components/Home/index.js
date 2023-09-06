import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    //Comment out for now .. add in later
    const nameArray = ['E', 'r', 'i', 'n', '!'];
    //const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    //const jobArray = ['T', 'e', 's', 't']; //delete?


    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => clearTimeout(idTimeOut);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _12`}>,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>' </span>
                        <span className={`${letterClass} _15`}>m</span>
                        <span> </span>

                        {/* <img src={LogoTitle} alt="developer" /> */}
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        {/* <AnimatedLetters letterClass={letterClass}
                        // strArray={jobArray} //delete?
                        //idx={22} //delete?
                        /> */}
                    </h1>
                    <h2>
                        Software Engineer / Full-Stack Developer
                    </h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="line-spin-fade-loader" />
        </>
    )
}

export default Home