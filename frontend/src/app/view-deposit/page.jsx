import Link from 'next/link'
import React from 'react'
import { TbBackground, TbLockDollar } from "react-icons/tb";
import { GiCoins } from "react-icons/gi";
import { TbClockDollar } from "react-icons/tb";
import { LiaPiggyBankSolid } from "react-icons/lia";
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+Devanagari:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />
const ViewDeposit = () => {
  return (
    <div>
      <>
  <div id="portfolio" className="section relative z-0 py-12 md:py-16 bg-white" >
    <div className="container xl:max-w-6xl mx-auto px-4">
      {/* Heading start */}
      <header className="text-center mt-10 mx-auto mb-12 lg:px-20">
        <h2 className="text-4xl leading-normal mb-2 font-bold text-black ">
          View Your Deposits
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
        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
          View all of your deposits are hear.
        </p>
      </header>
      {/* End heading */}
    </div>
    <div className="flex flex-wrap flex-row -mx-4 text-center">
        <Link href="/fd-list-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><TbLockDollar/></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
              Fixed Deposits
            </h3>
           <button className='bprder-2 bg-black aline-center text-white pt-1 pb-1 pl-4 pr-4 m-3'>View</button>
          </div>{" "}
          {/* end service block */}
        </Link>
        <Link href="/saving-list-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><LiaPiggyBankSolid /></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
             Saving Deposits
            </h3>
            <button className='bprder-2 bg-black aline-center text-white pt-1 pb-1 pl-4 pr-4 m-3'>View</button>
          </div>{" "}
          </Link>
          <Link href="/demand-list-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><GiCoins /></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
             Demand Deposits
            </h3>
            <button className='bprder-2 bg-black aline-center text-white pt-1 pb-1 pl-4 pr-4 m-3'>View</button>
          </div>{" "}
          {/* end service block */}
        </Link>
        <Link href="/recurring-list-deposit"
          className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
          data-wow-duration="1s"
        >
          {/* service block */}
          <div className="py-8 px-12 mb-12 bg-gray-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
            <div className="inline-block text-gray-900 mb-4">
              <p class="text-5xl"><TbClockDollar /></p>
              
            </div>
            <h3 className="text-lg leading-normal  mb-2 font-semibold text-black">
             recurring deposits
            </h3>
            <button className='bprder-2 bg-black aline-center text-white pt-1 pb-1 pl-4 pr-4 m-3'>View</button>
            
          </div>
          {/* end service block */}
        </Link>
      </div>
  </div>
  {/*  End Content */}
</>

    </div>
  )
}

export default ViewDeposit
