import React from "react";
import { PhoneIcon} from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import {BiSupport} from 'react-icons/bi'
import {AiFillApi} from 'react-icons/ai'
import {GrNetwork} from 'react-icons/gr'

const Support = () => {
  return (
    <div name="support" className="w-full mt-10 mb-7">
    

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center section-heading">
            <span>What</span> We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black service-component">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <BiSupport className='feature-icon' />
              <h3 className="font-bold text-2xl my-6">Support</h3>
              <p className="text-gray-600 text-xl">
                Providing around the clock customer support through our integrated chat 
              </p>
            </div>

          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
            <AiFillApi className='feature-icon' />
              <h3 className="font-bold text-2xl my-6">Crud API Testing </h3>
              <p className="text-gray-600 text-xl">
                The full functionality of all the Restful API architecture 
              </p>
            </div>
           
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
            <GrNetwork className='feature-icon' />
              <h3 className="font-bold text-2xl my-6">Shared Workspaces </h3>
              <p className="text-gray-600 text-xl">
              The ability to create and add people to a certain WorkSpace
              </p>
            </div>
           
          </div>
            </div>
          </div>
        </div>
      
  );
};

export default Support;
