import React from 'react'
import RoundedArrow from "../../public/canva images/round-single-arrow-removebg-preview.png"

function RoundedArrowImg() {
  return (
    <div className='absolute top-[13rem] left-[-12.1rem] h-4 w-[30rem]'>
        <img className="object-cover h-full w-[25rem] ml-[1.7rem]" src={RoundedArrow} alt="" />
    </div>
  )
}

export default RoundedArrowImg