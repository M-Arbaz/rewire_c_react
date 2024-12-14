import React from 'react'
import FaqAccordian from '../subComponent/FaqAccordian'
import EmpoweringBanner from '../subComponent/EmpoweringBanner'
import OurMission from '../subComponent/OurMission'
import AboutSec from '../subComponent/AboutSec'
import SetUSApart from '../subComponent/SetUSApart'
import Faq from '../subComponent/Faq'

export default function Home() {
  return (
    <>
      <EmpoweringBanner />
      <OurMission />
      <AboutSec />
      <SetUSApart/>
      <Faq/>
      
    </>
  )
}
