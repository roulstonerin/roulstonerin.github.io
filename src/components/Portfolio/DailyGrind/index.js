import { useRef } from 'react';
import DailyGrindBanner from '../../../assets/images/DG Banner.png';
import DailyGrindSite from '../../../assets/images/DailyGrindSite.png';
import DailyGrindLogos from '../../../assets/images/dglogos.png';
import './index.scss'


const DailyGrind = () => {
    const bgRef = useRef()

    return (
        <>
            <div className="main-container">
                <div className="banner-container" ref={bgRef}>
                    <img src={DailyGrindBanner} className="hero" alt="Daily Grind Coffee Logo" width="134.75pt" height="323.625pt"></img>
                </div>
                <div className="project-title">Daily Grind Coffee Shop</div>

                <div className="details-container">
                    <div className="details-text">
                        <b>Roles:</b> Web Developer, UI Designer, Content Creator, Photographer
                        <br />
                        <b>Context:</b> Rebrand Daily Grind Coffee Shop
                        <br />
                        <b>Timeline:</b> Jan. 2016 - Sept. 2018
                        <br />
                        <b>Tools:</b> Wireframing, Photoshop, HTML, CSS
                    </div>
                </div>

                <div className="project-content">
                    <h2>01 BACKGROUND</h2>
                    <p>
                        Daily Grind Coffee is a popular local coffee shop located in Winnipeg, Manitoba that serves a variety of
                        homemade drinks, sandwiches, and soups. When I was hired in 2016, the restaurant did not have company branding or
                        a website.
                    </p>
                    <br />

                    <h3>OBJECTIVE:</h3>
                    <p>
                        Give a brand identity to the business and build a company website.
                    </p>

                    <p>Note: You can now see the deployed website I designed and coded live at
                        <a href="https://dailygrindcoffee.ca/"> dailygrindcoffee.ca</a>
                    </p>
                    <br />

                    <h2>02 DESIGN</h2>
                    <p>
                        Current trends for other popular community coffee shop websites were researched. A theme began to emerge,
                        indicating that simplicity, elegance, and muted tones were preferred. Moving forward, this motivated the design decisions
                        for both the company website and internal content management system.</p>
                    <p>
                        Different logo iterations were created. The final two logos were chosen due to their simplicity,
                        readability, and ease
                        of use on physical products such as takeout coffee cups and containers. Having two options would allow for
                        the designer
                        to pick the appropriate one depending on its use case.</p>
                    <div className="banner-container" ref={bgRef}>
                        <img src={DailyGrindLogos} className="hero" alt="Daily Grind Coffee Logo" width="134.75pt" height="323.625pt"></img>
                    </div>
                    <p>
                        Photos of the coffee shop were taken, edited, and incorporated into the website to elicit a feeling of
                        warmth and familiarity to the viewer. The menu was hardcoded to ensure usability for screen readers using HTML and CSS.
                        CuteGrids, a responsive grid system, was also incorporated to enhance usability across different mobile devices.
                    </p>
                    <div className="banner-container" ref={bgRef}>
                        <img src={DailyGrindSite} className="hero" alt="Daily Grind Website" width="134.75pt" height="323.625pt"></img>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DailyGrind;

