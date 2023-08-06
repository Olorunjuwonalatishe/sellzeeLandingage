import React from 'react'
import Group36 from '../../../assets/Group 36.png'
import Group37 from '../../../assets/Group 37.png'
const Section7 = () => {
    return (
        <div>
            <div className='pt-32 bg-[#EBEDFF]'>
                <div className='flex-row text-center pb-6 font-bold text-lg'>
                    <p className>
                        Without Extra Charge Choose
                    </p>

                    <p className>Your Best Plan</p>
                </div>
                <div className='flex gap-6 justify-center items-center bg-white ml-[38rem] w-[20%] border-yellow-500 py-3 rounded-lg'>
                    <span>
                        <button className='text-white rounded-lg px-6 py-2 bg-[#FF5A05]'>Monthly</button>
                    </span>

                    <span>
                        <button className='bg-[#FFEFE6] rounded-lg px-6 text-lg text-[#FF5A05] font-semibold py-2'>Yearly</button>
                    </span>
            
                </div>

                
            </div>
                <div className='bg-[#EBEDFF] grid grid-cols-2 pt-10 place-content-center'>
                    <span className='pl-96'>
                        <img src={Group36} alt=""  width='60%'/>
                    </span>

                    <span className=''>
                        <img src={Group37} alt="" width='30%'/>
                    </span>
                </div>

            <div>

            </div>
        </div>
    )
}

export default Section7
