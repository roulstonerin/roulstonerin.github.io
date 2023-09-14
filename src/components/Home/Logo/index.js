import { useEffect, useRef } from 'react';
import ArmHigh from '../../../assets/images/arm high.png';
import './index.scss';

const Logo = () => {
    const bgRef = useRef()

    return (
        <div className="logo-container" ref={bgRef}>
            <img src={ArmHigh} className="solid-logo" alt="Cartoon Erin waving hello" width="134.75pt" height="323.625pt"></img>
        </div>
    )
}

export default Logo