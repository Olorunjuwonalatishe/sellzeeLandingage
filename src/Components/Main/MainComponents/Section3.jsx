import React from "react";
import Fedex1 from "../../../assets/fedex1.png";
import Fedex2 from "../../../assets/fedex2.png";
import Google from "../../../assets/google-1-removebg-preview 1.png";
import Ola from "../../../assets/Ola.png";
import Microsoft from '../../../assets/Microsoft.png'
import Amazon from "../../../assets/amazon.png";
import Walmart from "../../../assets/walmart.png";
const Section3 = () => {
  return (
    <div className=" grid grid-rows-2 gap-10 mt-20 px-80">
      <div className="grid grid-cols-4">
        <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl">
          <img src={Fedex1} alt="" width='65%'/>
        </span>
        <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl">
          <img src={Google} alt="" width='65%'/>
        </span>
        <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl">
          <img src={Ola} alt="" width='65%' />
        </span>
        <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl">
          <img src={Microsoft} alt=""  width='65%'/>
        </span>

      </div>

      <div className="grid grid-cols-3 px-40" >
      <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl">
        <img src={Amazon} alt="" width='65%' />
    </span>

      <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl">
          <img src={Fedex2} alt=""  width='60%'/>
        </span>

        <span className="w-52 h-16 flex justify-center gap-20 items-center shadow-xl ">
        <img src={Walmart} alt=""  width='65%'/>
    </span>
      </div>
    </div>
  );
};

export default Section3;
