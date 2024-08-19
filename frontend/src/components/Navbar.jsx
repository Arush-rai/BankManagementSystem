'use client';
import useUserContext from '@/Context/userContext';
import Link from 'next/link'
import React from 'react'
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {

  const { userLoggedIn, logout } = useUserContext();

  const showLoggedIn = () => {
    if (!userLoggedIn) {
      return <li className="relative hover:text-black">
        <Link
          className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
          href="/login"
        >
          login
        </Link>
      </li>
    } else {
      return <button onClick={logout}>Logout</button>
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 bg-gray-300 right-0 z-40">
        <nav className="main-nav">
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="lg:flex lg:justify-between">
              <div className="flex justify-between">
                <div className="mx-w-10 text-4xl font-bold capitalize text-gray-900 flex items-center">
                  MY BANK
                </div>
                {/* mobile nav */}
                <div className="flex flex-row items-center py-4 lg:py-0">
                  <div className="relative text-gray-900 hover:text-black block lg:hidden">
                    <button
                      type="button"
                      className="menu-mobile block py-3 px-6 border-b-2 border-transparent"
                    >
                      <span className="sr-only">Mobile menu</span>
                      <svg
                        className="open h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="close bi bi-x-lg h-8 w-8"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                {/* nav menu */}
                <ul className="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold">
                  <li className="relative hover:text-black ">
                    <Link
                      className="active block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative hover:text-black">
                    <Link
                      className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="/deposit"
                    >
                      Deposits
                    </Link>
                  </li>
                  <li className="relative hover:text-black">
                    <Link
                      className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="/view-deposit"
                    >
                      View deposits
                    </Link>
                  </li>
                  <li className="text-2xl">|</li>
                  <FaRegUser className="text-xl m-5 mr-0" />

                  <li className="relative hover:text-black">
                    <Link
                      className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="/signup"
                    >
                      sign up
                    </Link>
                  </li>
                  <li className="relative hover:text-black">
                    <Link
                      className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                      href="/#contact"
                    >
                      Contact us
                    </Link>
                  </li>
                  {showLoggedIn()}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* end header */}
    </>




  )
}

export default Navbar
