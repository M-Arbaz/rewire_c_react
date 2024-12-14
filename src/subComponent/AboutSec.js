import React from 'react'
import '../customCSS/aboutSec.css'
import aboutLogo from '../Img/about-logo.svg'
export default function AboutSec() {
    return (
        <>
            <div className='outerDiv aboutSecMain'>
                <div className='innerDiv margin flxC'>
                    <div className='aboutSecFlx flxR'>
                        <div className='aboutSecFlxLeft flxC'>
                            <h2 className='aboutSecHead'>About</h2>
                            <p className='aboutSecPara'>At RewireDev, we're a team of passionate
                                professionals united by a shared ambition to drive transformative
                                change and deliver outstanding results for our clients. Our diverse
                                backgrounds and collective expertise span various industries, allowing us
                                to approach each engagement with fresh thinking and bespoke solutions.</p>
                        </div>
                        <div className='aboutSecFlxRight flxC'>
                            <img src={aboutLogo} alt='aboutSecImage' height='25px' width='fit-content' />
                            <p className='aboutSecPara'>
                                Founded on principles of integrity, innovation, and a relentless pursuit of
                                excellence, we've built a reputation as a trusted
                                partner for organisations seeking to unlock their full potential. Our
                                consultants aren't just advisors - they're change agents.
                                Dedicated to understanding the intricacies
                                of
                                our clients' worlds, they craft strategies that propel them towards sustainable
                                success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
