import React, { useState } from 'react'

export default function FaqAccordian() {
    const [queStat, setQueStat] = useState(0);
    function controlQuestion(level){
        if(level === queStat){
            setQueStat(0)
        }
        setQueStat(level);
    }
  return (
    <div className='accordian'>
<div className='question question1' onClick={()=>{controlQuestion(1)}}>
  <div className={queStat === 1 ? "open" :"close"}><h2>question</h2></div>
  {queStat === 1 && <p>
    answer1
  </p>}
</div>
    </div>
  )
}
