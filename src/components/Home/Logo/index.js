import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-s.png';
import ArmHigh from '../../../assets/images/arm high.png';
// import { useRive, useStateMachineInput } from 'rive-react';
import Rive from '@rive-app/react-canvas';
import './index.scss';

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

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
            {/* START OF TESTING */}
            {/* <div className="terminal">
                <div className="fakeButtons fakeClose"></div>
                <div className="fakeButtons fakeMinimize"></div>
                <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen">
                <p className="line1">$ I'd love to get in touch!<span class="cursor1">_</span></p>
                <p className="line2">Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile.js to build your app.<span class="cursor2">_</span></p>
                <p className="line3">[?] What more would you like? (Press space to select)<span class="cursor3">_</span></p>
                <p className="line4"><span class="cursor4">_</span></p>
            </div> */}
            {/* END OF TESTING */}
            <img src={ArmHigh} className="solid-logo" alt="Cartoon Erin waving hello" width="134.75pt" height="323.625pt"></img>
        </div>
    )
}

export default Logo