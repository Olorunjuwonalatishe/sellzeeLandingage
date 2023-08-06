import React from "react";
import BeardGuy from "../../../assets/Rectangle 26.png";

const Section6User = () => {
  return (
    <div className="pt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">Users Review</h1>
        <h6 className="pt-6 text-xs">
          Collaborate over projects with your team and clients optimised for
          mobile and tablet don't let slow
        </h6>
      </div>

      <div className="flex justify-between items-center px-40 pt-16">
        <div className="pb-20">
          <p className="ml-64 text-lg font-bold pb-24">What People Say About Us</p>
          <div className="shadow-xl w-52 ml-72 pr-4 h-16">
            <p className="font-bold">Davit Millar</p>
            <p>CEO, PParkview intl,Ltd</p>
          </div>

          <div className="shadow-xl w-96 h-32 ml-72 pr-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              odit deleniti, a velit, eaque cumque perspiciatis vitae magnam
              iusto expedita quas voluptas consectetur incidunt! Perferendis,
              voluptates eos!
            </p>
          </div>

        </div>

        <div className="mr-2">
              <img src={BeardGuy} alt="" width='80%'/>
            </div>
      </div>
    </div>
  );
};

export default Section6User;
