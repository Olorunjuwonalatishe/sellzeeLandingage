import React from "react";
import Man from "../../../assets/thinkingguy.png";
import Check from "../../../assets/arrow.png";
import Button from "../../Button/Button";
const Section4 = () => {
    return (
        <div className="flex justify-between items-center px-24 pt-8">
            <div className="pr-4">
                <img src={Man} alt="" width="100%" />
            </div>

            <div className="flex gap-6 flex-col pt-10 pl-12 pb-[8rem]">
                <p className="text-[#FF8F56] pt-8 font-bold">Lorem ipsum dolor sit amet.</p>
                <h1 className="text-4xl font-bold">Simple Solutions for Complex Connections</h1>
                <h5 className="text-[#7C797E]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                    dignissimos aliquid quaerat cumque nostrum ratione, asperiores,
                    commodi hic ipsam sunt est, voluptas sed at!
                </h5>
                <div className="flex items-center gap-5 ">
                    <span className="flex items-center gap-3">
                        <img src={Check} alt="" width='20%' />
                        <h5 className="font-bold">High Analysis</h5>
                    </span>

                    <span className="flex items-center gap-3">
                        <img src={Check} alt="" width='18%' />
                        <h5 className="font-bold">Certified Institute</h5>
                    </span>
                </div>
                <div className="pb-8">
                <Button>Learn More</Button>
                </div>


            </div>
        </div>
    );
};

export default Section4;
