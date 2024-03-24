import React from 'react'
import SingleArrow from "../../public/canva images/single_arrow-removebg-preview.png";
import "./test.css";

function SingleArrowImg() {
  return (
    <div className='test'>
        <img className="object-cover h-full w-[25rem] ml-[1.7rem]" src={SingleArrow} alt="" />
    </div>
  )
}

export default SingleArrowImg