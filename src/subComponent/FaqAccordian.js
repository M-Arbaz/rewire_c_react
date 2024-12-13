import React, { useState } from 'react'

export default function FaqAccordian() {
  const [queStat, setQueStat] = useState(0);
  function controlQuestion(level) {
    console.log(level === queStat)
    if (level === queStat) {
      setQueStat(null);
      return;
    } else {
      setQueStat(level);
    }
  }
  return (
    <div className='accordian'>
      <div className='question question1' onClick={() => { controlQuestion(1) }}>
        <div className={queStat === 1 ? "open accordianItem" : "close accordianItem"}><h2>How do I get started with your services?</h2> <i className="fa-solid fa-arrow-right"></i></div>
        {queStat === 1 && <div className='accordianAnswer'><p>
          You can get started by contacting our support team or visiting our website to learn more about our services.
        </p></div>}
      </div>

      <div className='question question2' onClick={() => { controlQuestion(2) }}>
        <div className={queStat === 2 ? "open accordianItem" : "close accordianItem"}><h2>How can I contact your support team? What are your business hours?</h2> <i className="fa-solid fa-arrow-right"></i></div>
        {queStat === 2 && <div className='accordianAnswer'><p>
          You can reach our support team via email at waqas.rasheed@rewiredev.com, or call us at +1 816-702-5130. We also offer a live chat option on our website. Our business hours are Monday to Friday, 9 AM to 6 PM. For emergency support, we are available 24/7.
        </p></div>}
      </div>

      <div className='question question3' onClick={() => { controlQuestion(3) }}>
        <div className={queStat === 3 ? "open accordianItem" : "close accordianItem"}><h2>What is your response time for support requests?</h2> <i className="fa-solid fa-arrow-right"></i></div>
        {queStat === 3 && <div className='accordianAnswer'><p>
          Our response time for support requests is typically within 24 hours.
        </p></div>}
      </div>

      <div className='question question4' onClick={() => { controlQuestion(4) }}>
        <div className={queStat === 4 ? "open accordianItem" : "close accordianItem"}><h2>Do you offer remote support?</h2> <i className="fa-solid fa-arrow-right"></i></div>
        {queStat === 4 && <div className='accordianAnswer'><p>
          Yes, we offer remote support to assist you with any issues you may have.
        </p></div>}
      </div>

      <div className='question question5' onClick={() => { controlQuestion(5) }}>
        <div className={queStat === 5 ? "open accordianItem" : "close accordianItem"}><h2>What information do you need from me to start a project? Do you provide training and documentation?</h2> <i className="fa-solid fa-arrow-right"></i></div>
        {queStat === 5 && <div className='accordianAnswer'><p>
          We need detailed information about your project requirements. Yes, we provide training and documentation to help you get started.
        </p></div>}
      </div>

    </div>
  )
}
