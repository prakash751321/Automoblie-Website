import React, { useState } from "react";
import dualarrow from "../../../public/canva images/dual_arrow-removebg-preview.png";
import fourarrow from "../../../public/canva images/fourarrow-removebg-preview.png";
import "../test.css";
import SingleArrowImg from "../../../public/canva images/single_arrow-removebg-preview.png";
import SqureArrow from "../../../public/canva images/square-arrow-twin-removebg-preview.png"

function ToggleOn({ text, External, Internal, Color, hideElement, setHideElement, hideDesign, setHideDesign, hideManufacture, setHideManufacture, hideSale, setHideSale }) {  

  const [show, setShow] = useState(false);


  const checkkr = () => {
    setShow(!show);
  };

  return (
    // clickable button
    <div>
      <button
        className={
          show ? "text-white font-semibold" : "text-black font-semibold"
        }
        onClick={checkkr}
      >
        {text}
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
      <div>
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
        {/* Dual arrow image */}
       <div id="box" className="relative group"> 
        <div
          className={
            show ? "dual_arrow1 absolute opacity-100" : " absolute opacity-0"
          }
        >
          <img
            className="object-contain h-full w-full"
            src={dualarrow}
            alt=""
          />
        </div>
        {/* B2C Box */}
        <div
          style={{ backgroundColor: Color }}
          className={
            show
              ? "border-solid border-2 border-sky-500  rounded-sm h-10 w-60 blue2 block absolute top-[-5rem] left-[52rem] text-white"
              : "hidden"
          }
        >
          <p>B2C</p>
        </div>
        {/* Single Arrow Image */}
        <div
          className={
            show
              ? "singlearrow1 absolute top-[-2.9rem] left-[55rem] opacity-100"
              : " absolute opacity-0"
          }
        >
          <img
            className="object-cover h-full w-full"
            src={SingleArrowImg}
            alt=""
          />
        </div>
        {/* Four Arrow Image */}
        <div
          className={
            show
              ? "fourarrow absolute top-[-2.9rem] left-[55rem] opacity-100"
              : " absolute opacity-0"
          }
        >
          <img
            className="object-contain h-full w-full"
            src={fourarrow}
            alt=""
          />
        </div>
        {/* ONline Box */}
        <div
          style={{ backgroundColor: Color }}
          id="box"
          className={
            show
              ? 
              "border-solid border-2 border-sky-500 rounded-sm h-10 w-60 blue4 block absolute top-[-9rem] left-[78rem] text-white"
              // "absolute top-[-6.9rem] left-[80rem] border-2 border-yellow-400 rounded-sm h-20 w-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white"
              : "opacity-0"
          }
        >
          <p>Online</p>
        </div>
        <div className={
            show
              ? "squarearrow opacity-100"
              : " absolute opacity-0"
          }>
          <img className="object-contain h-full w-full" src={SqureArrow} alt="" />
        </div>
        <div className="absolute top-[-6.9rem] left-[80rem] border-2 border-yellow-400 rounded-sm h-20 w-60 hidden" id="hoverbox">
          <p>Total</p>
          <p>ss</p>
        </div>
        {/* Interview Box */}
        <div
          style={{ backgroundColor: Color }}
          className={
            show
              ? "border-solid border-2 border-sky-500 rounded-sm h-10 w-60 blue4 block absolute top-[-6rem] left-[78rem] text-white"
              : "hidden"
          }
        >
          <p>Interview</p>
        </div>
        {/* Public Data */}
        <div
          style={{ backgroundColor: Color }}
          className={
            show
              ? "border-solid border-2 border-sky-500 rounded-sm h-10 w-60 blue4 block absolute top-[-3.2rem] left-[78rem] text-white"
              : "hidden"
          }
        >
          <p>Public Data</p>
        </div>
        {/* Health */}
        <div
          style={{ backgroundColor: Color }}
          className={
            show
              ? "border-solid border-2 border-sky-500 rounded-sm h-10 w-60 blue4 block absolute top-[-0.2]rem; left-[78rem] text-white"
              : "hidden"
          }
        >
          <p>Health</p>
        </div>
        {/* B2C Box */}
        <div
          style={{ backgroundColor: Color }}
          className={
            show
              ? "border-solid border-2 border-sky-500 rounded-sm h-10 w-60 blue3 block absolute top-[-2.3rem] left-[52rem] text-white"
              : "hidden"
          }
        >
          <p>B2C</p>
        </div>
      </div>
      {/* Internal Box */}
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
  </div>
  );
}

export default ToggleOn;
