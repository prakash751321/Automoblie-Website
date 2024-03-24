import React from "react";
import "./test.css";
import SingleArrowImg from "./SingleArrowImg";
import RoundedArrow from "./RoundedArrowImg";
import ToggleOn from "./ToggleButton/ToggleOn";
import ToggleButtonTwo from "./ToggleButton/ToggleButtonTwo"

function Home_Container() {

  return (
    <>
      {/*   For Research   */}
      <div>
        <SingleArrowImg />
      </div>
      <div
        style={{ backgroundColor: "#3333d7" }}
        className="border-solid border-2 border-sky-500 rounded-sm w-60 blue"
      >
        <ToggleOn
          text={"Research"}
          External={"External"}
          Internal={"Internal"}
          Color={"#3333d7"}
        />
      </div>
      {/*   For Planning   */}
      <div className="absolute top-[6.5rem] left-[0rem] h-4 w-[30rem]">
        <SingleArrowImg />
      </div>
      <div
        style={{ backgroundColor: "#7c7cdb" }}
        className="border-solid border-2 border-sky-500 rounded-sm w-60 light_blue"
      >
        <ToggleButtonTwo
          text={"Planning"}
          External={"PRD"}
          Internal={"Specs"}
          Color={"#7c7cdb"}
        />
      </div>
      {/*   For Design   */}
      <div>
        <RoundedArrow />
      </div>
      <div
        style={{ backgroundColor: "rgb(214, 55, 55)" }}
        className="border-solid border-2 border-red-400 rounded-sm w-60 light_red"
      >
         <ToggleButtonTwo
          text={"Design"}
          External={"Hardware"}
          Internal={"Software"}
          Color={"rgb(214, 55, 55)"}
        />
      </div>
      {/* For Manufacturing */}
      <div className="absolute top-[20rem] left-[0rem] h-4 w-[30rem]">
        <SingleArrowImg />
      </div>
      <div
        style={{ backgroundColor: "palevioletred" }}
        className="border-solid border-2 border-pink-400 rounded-sm w-60 light_pink"
      >
         <ToggleButtonTwo
          text={"Manufacturing"}
          External={"Material"}
          Internal={"Production"}
          Color={"palevioletred"}
        />
      </div>
      {/* For Sales/MArketing */}
      <div className="absolute top-[27.3rem] left-[0rem] h-4 w-[30rem]">
        <SingleArrowImg />
      </div>
      <div
        style={{ backgroundColor: "rgb(146, 83, 146)" }}
        className="border-solid border-2 border-purple-500 rounded-sm w-60 light_purple"
      >
         <ToggleButtonTwo
          text={"Sales/Marketing"}
          External={"Online"}
          Internal={"Dealership"}
          Color={"rgb(146, 83, 146)"}
        />
      </div>
    </>
  );
}

export default Home_Container;
