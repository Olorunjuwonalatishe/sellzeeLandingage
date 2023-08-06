import React from "react";
import Button from "../Button/Button";
import Tablets from "../../assets/Pixel True Mockup 1.png";

const Section2 = () => {
  return (
    <div>
      <div className="flex flex-wrap w-screen pl-80 bg-blue-600 pb-8" >
        <div className="w-[33%]">
            <div className="mt-[4rem] text-white w-[85%]">
          <h5 className="font-semibold tracking-widest text-xl">INSPIRATION TECHNOLOGY</h5>
          <h2 className="font-semibold text-6xl pt-2">Runs faster.</h2>
          <p className="font-semibold text-5xl border-b-2 pb-6">Costs less and never breaks.</p><br />

            </div>

          <div className="">
          <div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem perferendis tempore et quasi impedit, debitis
              laborum voluptas consequuntur eveniet placeat?
            </p>
          </div>
          <div className="mt-5 flex gap-10">
            <Button>Get Started</Button>
            <button className="border px-8 h-10 border-gray-200 rounded-md text-white font-medium">Free Trial</button>
          </div>
        </div>
        </div>
       

        <div className="w-[67%] pt-[2.5rem]">
          <img src={Tablets} alt="" width="75%" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
