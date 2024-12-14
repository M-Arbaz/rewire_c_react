import React from 'react'
import '../customCSS/faq.css'
import FaqAccordian from './FaqAccordian'
import sitelogo from '../Img/about-logo.svg'
export default function Faq() {
  return (
    <>
        <div className='outerDiv  faq'>
                <div className='innerDiv  margin flxC'>
                    <div className='faqSec flxC'>
                        <h2 className='faqHead'>Frequently Asked Questions</h2>
                        <p className='faqPara'>
                        Discover the transformative experiences shared by our satisfied customers. Their genuine
                         stories highlight the remarkable results and positive changes they've achieved with our services.
                        </p>
                    </div>
                 
                 <div className='faqQuestion flxR'>
                <div className='faqQuestionLeft'>
                 <FaqAccordian/>
                </div>

                <div className='faqQuestionRight flxC'>
                <div className='faqQuestionRightCont flxC'>
                 <p>
                    <b>You can reach our support</b>
                 </p>
                 <p>
                 You can reach our support team via email at info@rewiredev.com , 
                 or call us at . We also offer a live chat option on our website.
                 <br/><br/>
                 Our business hours are Monday to Friday, 9 AM to 6 PM. For emergency support, we are available 24/7.
                 </p>
                 </div>
                 <div className='faqQuestionRightImg'><img src={sitelogo} alt='sitelogo'/></div>
                </div>
                 </div>

                    </div>
                    </div>
    </>
  )
}
