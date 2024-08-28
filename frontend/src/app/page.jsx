'use client'
import HeroSlider from '@/components/img-slider';
import Link from 'next/link';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';<link href="https://fonts.googleapis.com/css?family=Tiro+Devanagari+Hindi:regular,italic" rel="stylesheet" />

const Home = () => {
  return (
    <div>
      <main id="content">
        {/* hero start */}
        <div
          id="hero"
          className="section relative z-0 py-28 mt-20 md:pt-32 md:pb-20 bg-gray-100"
        >
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap flex-row -mx-4 justify-center">
              {/* content */}
              <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">

                <HeroSlider/>

              </div>
              {/* end content */}
              {/* text */}
              <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
                <div className="text-center lg:text-left mt-6 lg:mt-0">
                  <div className="mb-12">
                    <h1 className="text-4xl leading-normal text-black font-bold mb-4">

                      MY BANK Digital
                      <br />
                      serve :{" "}

                      <Typewriter
                        words={['Fixed Deposit', 'Demand Deposit', 'Saving Deposit', 'Recurring Deposit']}
                        loop={20000}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={100}
                        delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                      />
                    </h1>
                    <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                      We would direct you to limitless &amp; safe degitalise payment
                      methods.
                    </p>
                  </div>

                 

                  <Link
                    className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                    href="/deposit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      className="inline-block mr-1"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <rect
                        x={48}
                        y={96}
                        width={416}
                        height={320}
                        rx={40}
                        ry={40}
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32
                        }}
                      />
                      <polyline
                        points="112 160 256 272 400 160"
                        style={{
                          fill: "none",
                          stroke: "currentColor",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 32
                        }}
                      />
                    </svg>
                    Deposits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Hero */}

        <div id="contact" className="section relative py-10 bg-white " style={{ backgroundImage: ` url('https://static.vecteezy.com/system/resources/previews/022/371/795/non_2x/a-blue-digital-technology-background-with-a-white-building-and-a-logo-for-the-bank-vector.jpg')` }}>
          <div className="container xl:max-w-6xl mt-28 mx-auto px-4   ">
            <div className="flex flex-wrap flex-row -mx-4 justify-center  ">
              <div className="max-w-ful px-4 w-full lg:w-8/12  ">
                <div
                  className="bg-gray-50 border-5 border-gray-100 w-full p-12 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                >
                  {/* section header */}
                  <header className="text-center mx-auto mb-12 lg:px-20">
                    <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 ">
                      <span className="font-bold underline">Contact us</span>
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
                    <p className="text-gray-600 leading-relaxed font-light text-xl mx-auto pb-2">
                      Have questions about service, please contact us.
                    </p>
                  </header>
                  {/* end section header */}
                  {/* contact form */}
                  <form action="#">
                    <div className="flex flex-wrap flex-row -mx-4">
                      <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                        <label className="inline-block mb-2" htmlFor="name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400  dark:border-gray-700 dark:focus:border-gray-600"
                          id="name"
                        />
                        <div className="validate" />
                      </div>
                      <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
                        <label className="inline-block mb-2" htmlFor="email">
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400  dark:border-gray-700 dark:focus:border-gray-600"
                          name="email"
                          id="email"
                        />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="inline-block mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400  dark:border-gray-700 dark:focus:border-gray-600"
                        name="subject"
                        id="subject"
                      />
                      <div className="validate" />
                    </div>
                    <div className="mb-6">
                      <label className="inline-block mb-2" htmlFor="messages">
                        Message
                      </label>
                      <textarea
                        className="w-full leading-5 relative py-0 px-0 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400  dark:border-gray-700 dark:focus:border-gray-600"
                        name="message"
                        rows={6}
                        id="messages"
                        defaultValue={""}
                      />
                      <div className="validate" />
                    </div>
                    <div className="text-center mb-6">
                      <a
                        className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                        href="#project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5rem"
                          height="1.5rem"
                          className="inline-block mr-1"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <rect
                            x={48}
                            y={96}
                            width={416}
                            height={320}
                            rx={40}
                            ry={40}
                            style={{
                              fill: "none",
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 32
                            }}
                          />
                          <polyline
                            points="112 160 256 272 400 160"
                            style={{
                              fill: "none",
                              stroke: "currentColor",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 32
                            }}
                          />
                        </svg>
                        Send message
                      </a>
                    </div>
                  </form>
                  {/* end contact form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home;
