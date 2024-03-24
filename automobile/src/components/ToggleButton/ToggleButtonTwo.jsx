import React, { useState } from "react";
import dualarrow from "../../../public/canva images/dual_arrow-removebg-preview.png";
import fourarrow from "../../../public/canva images/fourarrow-removebg-preview.png";
import "../test.css";
import SingleArrowImg from "../../../public/canva images/single_arrow-removebg-preview.png";

function ToggleButtonTwo({ text, External, Internal, Color }) {

  const [show, setShow] = useState(false);


  const checkkr = () => {
    setShow(!show);
  };


  return (
    <div>
         <button
        className={
          show ? "text-white font-semibold" : "text-black font-semibold"
        }
        onClick={checkkr}
      >
        {" "}
        {text}{" "}
      </button>
      {/* dual arrow image */}
      <div
        className={
          show ? "dual_arrow absolute opacity-100" : " absolute opacity-0"
        }
      >
        <img className="object-contain h-full w-full" src={dualarrow} alt="" />
      </div>
      {/* 1st External box */}

        <div
          style={{ backgroundColor: Color }}
          className={
            show
              ? "border-solid border-2 rounded-sm h-10 w-60 blue1 block absolute   top-[-2.2rem] left-[32rem] text-white"
              : "hidden"
          }
        >
          <p>{External}</p>
        </div>
       
        {/* B2C Box */}
        <div
        style={{ backgroundColor: Color }}
        className={
          show
            ? "border-solid border-2 border-sky-500 rounded-sm h-10 w-60 blue1 block absolute top-[2.2rem] left-[32rem] text-white"
            : "hidden"
        }
      >
        <p>{Internal}</p>
      </div>
        </div>
       
  )
}

export default ToggleButtonTwo