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

                    <div className='aboutSubSec flxR'>
                        <div className='aboutSubSecCard aboutSubSecCard1 flxC'>
                            <h3>Who We Are?</h3>
                            <p>
                                Our diverse backgrounds and collective expertise span various
                                industries, allowing us to approach each
                                engagement with fresh thinking.
                            </p>
                        </div>

                        <div className='aboutSubSecCard aboutSubSecCard2 flxC'>
                            <h3>Empowering Your Success</h3>
                            <p>
                                Empowerment through expertise is the cornerstone of every successful consultancy engagement.
                            </p>
                        </div>

                        <div className='aboutSubSecCard aboutSubSecCard3 flxC'>
                            <h3>The Path to Transformation</h3>
                            <p>
                                Consultancy is the catalyst for transformation, guiding organizations through a strategic path of positive change.
                            </p>
                        </div>

                        <div className='aboutSubSecCard aboutSubSecCard4 flxC'>
                            <h3>Understanding Your World</h3>
                            <p>
                                Consultants thrive on understanding the intricacies of their client's worlds, unlocking insights that drive informed decision-making.
                            </p>
                        </div>

                        <div className='aboutSubSecCard aboutSubSecCard5 flxC'>
                            <h3>The Impact We Make</h3>
                            <p>
                                Integrity, expertise, and a commitment to excellence—these are the pillars upon which our consultancy stands firm.
                            </p>
                        </div>

                        <div className='aboutSubSecCard aboutSubSecCard6 flxC'>
                            <h3>What We Stand For</h3>
                            <p>
                                Integrity, expertise, and a commitment to excellence—these are the pillars upon which our consultancy stands firm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
