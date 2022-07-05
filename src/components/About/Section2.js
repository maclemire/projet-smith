import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Section2() {
  const percentage = 75;
  const percentage2 = 83;
  const percentage3 = 25;
  const percentage4 = 95;
  return (
    <div className="flex pt-24 pl-16 gap-20 ">
      <div className="w-36 ">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
        <p className=" text-primary text-sm font-extrabold pt-12 text-center">
          INTUITION
        </p>
      </div>
      <div className="w-36">
        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
        <p className="text-primary text-sm font-extrabold pt-12 text-center">
          CREATIVITY
        </p>
      </div>
      <div className="w-36 ">
        <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
        <p className="text-primary text-sm font-extrabold pt-12 text-center">
          PURE LUCK
        </p>
      </div>
      <div className="w-36">
        <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
        <p className="text-primary text-sm font-extrabold pt-12 text-center">
          AWESOMENESS
        </p>
      </div>
    </div>
  );
}
