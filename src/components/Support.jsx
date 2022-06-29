import React from "react";
import { PhoneIcon} from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import {BiSupport} from 'react-icons/bi'

const Support = () => {
  return (
    <div name="support" className="w-full mt-10">
    

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center section-heading">
            <span>What</span> We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <BiSupport className='feature-icon' />
              <h3 className="font-bold text-2xl my-6">live support</h3>
              <p className="text-gray-600 text-xl">
                providing live contact with our experts in development
              </p>
            </div>

          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
            <BiSupport className='feature-icon' />
              <h3 className="font-bold text-2xl my-6">Crud API Testing </h3>
              <p className="text-gray-600 text-xl">
                the ability to check any method to test the requsts for your
                server
              </p>
            </div>
           
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
            <BiSupport className='feature-icon' />
              <h3 className="font-bold text-2xl my-6">Crud API Testing </h3>
              <p className="text-gray-600 text-xl">
                the ability to check any method to test the requsts for your
                server
              </p>
            </div>
           
          </div>
            </div>
          </div>
        </div>
      
  );
};

export default Support;
