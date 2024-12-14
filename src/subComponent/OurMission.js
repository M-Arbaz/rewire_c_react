import React from 'react'
import '../customCSS/mission.css'
import missionImg from '../Img/our-mission.webp'

export default function OurMission() {
    return (
        <>
            <div className='outerDiv mission margin'>
                <div className='innerDiv flxR '>
                    <div className='missionLeft flxC'>
                        <div className='missionSec1 flxC'>
                            <h2 className='missionHeading'>Our Mission</h2>
                            <p className='missionPara'>We provide outstanding,
                                tailored consultancy services, nurturing enduring partnerships built upon
                                collaboration and innovation, to unlock our clients'
                                true potential and propel them towards sustained accomplishment.</p>
                        </div>
                        <div className='missionSec2 flxC'>
                            <h3 className='missionSubHead'>Strategic Growth Solutions</h3>
                            <p className='missionSubPara'>Crafting customized strategies
                                to accelerate your business growth,
                                optimize resources, and enhance competitive advantage.</p>
                        </div>
                        <div className='missionSec3 flxC'>
                            <h3 className='missionSubHead'>Operational Excellence</h3>
                            <p className='missionSubPara'>
                            Streamlining processes to boost efficiency, improve quality, and reduce costs,
                             enabling seamless day-to-day operations.</p>
                        </div>
                        <div className='missionSec4 flxC'>
                            <h3 className='missionSubHead'>Innovative Technology</h3>
                            <p className='missionSubPara'>
                            Leveraging the latest technology and innovation to modernize your organization, 
                            drive digital transformation, and unlock new opportunities.</p>
                        </div>
                    </div>
                    <div className='missionRight'> <img className='img' src={missionImg} alt='Our Mission' /></div>

                </div>
            </div>
        </>
    )
}
