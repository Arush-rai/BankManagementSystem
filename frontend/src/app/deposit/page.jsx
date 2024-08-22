import Link from 'next/link';
import React from 'react'
import { TbLockDollar } from "react-icons/tb";
import { GiCoins } from "react-icons/gi";
import { TbClockDollar } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";

const deposit = () => {
  return (
    <div >
   
      <>
  {/* start services */}
   <div
  //  style={ { backgroundImage:  ` url('https://static.vecteezy.com/system/resources/previews/026/827/704/non_2x/banking-technology-design-vector.jpg')` }} 
    id="services"
    className="section relative  pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
  >
    <div className="container xl:max-w-6xl mt-10 mx-auto px-4">
      {/* Heading start */}
      <header className="text-center mx-auto mb-12 lg:px-20">
        <h2 className="text-5xl leading-normal mb-2 font-bold text-black">
          Deposits
        </h2>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 60"
          style={{ margin: "0 auto", height: 35 }}
          xmlSpace="preserve"
        >
          <circle
            cx="50.1"
            cy="30.4"
            r={5}
            className="stroke-primary"
            style={{
              fill: "transparent",
              strokeWidth: 2,
              strokeMiterlimit: 10
            }}
          />
          <line
            x1="55.1"
            y1="30.4"
            x2={100}
            y2="30.4"
            className="stroke-primary"
            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
          />
          <line
            x1="45.1"
            y1="30.4"
            x2={0}
            y2="30.4"
            className="stroke-primary"
            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
          />
        </svg>
        <p className="text-black leading-relaxed  text-xl mx-auto pb-2">
          Make your payments &amp; deposits in just one click.
        </p>
      </header>
      {/* End heading */}
      {/* row */}
      <div className="flex flex-wrap flex-row -mx-4 text-center">
        <Link href="/fixed-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><TbLockDollar/></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
              Fixed Deposit
            </h3>
            <p className="text-gray-500">
              This is a wider card with supporting text below as a natural
              content.
            </p>
          </div>{" "}
          {/* end service block */}
        </Link>
        <Link href="/saving-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><LiaPiggyBankSolid /></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
             Saving Deposit
            </h3>
            <p className="text-gray-500">
              This is a wider card with supporting text below as a natural
              content.
            </p>
          </div>{" "}
          </Link>
          <Link href="/demand-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><GiCoins /></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
             Demand Deposit
            </h3>
            <p className="text-gray-500">
              This is a wider card with supporting text below as a natural
              content.
            </p>
          </div>{" "}
          {/* end service block */}
        </Link>
        <Link href="/recurring-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><TbClockDollar /></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
             recurring deposit
            </h3>
            <p className="text-gray-500">
              This is a wider card with supporting text below as a natural
              content.
            </p>
          </div>{" "}
          {/* end service block */}
        </Link>
      </div>
    </div>
    
  </div>
  {/* End Service */}
</>

    </div>
  )
}

export default deposit;
