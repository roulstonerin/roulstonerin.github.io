import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import LogoS from '../../../assets/images/logo-s.png';
import ArmHigh from '../../../assets/images/arm high.png';
import './index.scss';

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img src={ArmHigh} className="solid-logo" alt="Cartoon Erin waving hello" width="134.75pt" height="323.625pt"></img>
        </div>
    )
}

export default Logo