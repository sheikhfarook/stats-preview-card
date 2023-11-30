import React from "react";
import smallImage from "../assets/images/image-header-mobile.jpg";
import MeetingImage from "../assets/images/image-header-desktop.jpg";

const NewCard = () => {
  return (
    <div
      className="lg:w-[70%] lg:m-auto lg:mt-[15%] flex-row max-lg:w-[60%] max-lg:h-[30%] max-lg:mt-1 max-lg:flex-col-reverse max-sm:flex-col-reverse max-sm:w-[80%] max-sm:m-auto max-sm:h-[30%] max-sm:mt-4
    
    w-[60%] ml-[21%] h-[29.5rem] mt-[15rem]  m-auto flex ">
      {/* efcvef */}
      <div
        className="lg:w-[70%] max-lg:w-[100%] max-lg:m-auto max-lg:rounded-t-none max-lg:rounded-b-2xl max-sm:w-[100%] max-sm:rounded-t-none max-sm:rounded-b-2xl
      w-[50%] bg-[#1B1938] rounded-l-2xl pt-10">
        <div
          className="max-lg:w-[80%] max-lg:mt-2 max-lg:text-center max-sm:w-[85%] max-sm:m-auto max-sm:text-center
        w-[70%] m-auto mt-10 text-[#ffffff] ">
          <h1 className="font-inter  leading-[2.5rem] font-[700] text-[35px]">
            Get <span className="text-[#AA5CDB] font-[700]">insights </span>that
            help your bussiness grow.
          </h1>
          <p
            className="max-lg:w-[18rem] max-lg:m-auto max-lg:mt-8 max-sm:w-[18rem] max-sm:m-auto max-sm:mt-5 max-sm:leading-7
          w-[25rem] mt-10 font-inter font-[400] text-[#c4c4c4]  text-[1rem] leading-[22px]">
            Discover the benefits of date analytics and make better decisions
            regardings revenue, customer experience, and overall efficiency.
          </p>
          <div
            className="lg:w-[85%] max-lg:inline-grid max-lg:gap-10 max-sm:inline-grid max-lg:mt-12  max-sm:gap-8
             flex justify-between mt-[4.2rem] font-inter">
            <div>
              <div
                className="max-sm:text-[25px]
              font-[700] text-[25px]">
                10k+
              </div>
              <div
                className="max-sm:text-[14px] 
              font-[600] text-[#979797] text-xs">
                COMPANIES
              </div>
            </div>
            <div>
              <div
                className="max-sm:text-[25px] 
              font-[700] text-[25px]">
                314
              </div>
              <div
                className="max-sm:text-[14px]
              font-[600] text-[#979797] text-xs">
                TEMPLATES
              </div>
            </div>
            <div className="max-sm:mb-12">
              <div
                className="max-sm:text-[25px] 
               font-[700] text-[25px]">
                12M+
              </div>
              <div
                className="max-lg:mb-6 max-sm:text-[14px] 
              font-[600]  text-[#979797] text-xs">
                QUERIES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ercer */}
      <figcaption className="relative">
        <div
          className=" bg-[#b956ff] z-20 opacity-60 brightness-50 contrast-125
      absolute w-full max-w-full h-full   "></div>
        <img
          className="max-lg:rounded-t-2xl 2xl:hidden lg:hidden"
          src={smallImage}
          w
          alt=""
        />
        <img
          className="max-sm:hidden max-lg:hidden
          h-[29.5rem]  rounded-r-2xl "
          src={MeetingImage}
          alt=""
        />
      </figcaption>
    </div>
  );
};
// max-sm:h-[16rem] max-sm:w-[100%]

export default NewCard;
