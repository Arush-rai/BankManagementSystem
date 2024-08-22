'use client';
import useUserContext from '@/Context/userContext';
import Link from 'next/link'
import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { useState } from "react"
const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // <-- Toggle menu visibility
  };

  const { userLoggedIn, logout } = useUserContext();

  const showLoggedIn = () => {
    if (!userLoggedIn) {
      return <>
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
            href="/login"
          >
            login
          </Link>
        </li>
      </>
    } else {
      return <button className='bg-red-600 p-2 text-white border rounded-md'  onClick={logout}>Logout</button>
    }
  }

  return (
    <>
       <header className="fixed top-0 left-0 bg-gray-300 right-0 z-40">
      <nav className="main-nav">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold capitalize text-gray-900 flex gap-4 items-center">
              <img src="/logo.png" className="h-16" alt="Logo" />
              <p>MY BANK</p>
            </div>
            {/* Mobile Nav Button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="py-3 px-6"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Mobile menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-8 w-8"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8"
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
                )}
              </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-row items-center">
              <ul className="flex flex-row text-gray-900 text-sm items-center font-bold">
                <li className="relative hover:text-black">
                  <Link
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
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
                <li className="relative hover:text-black">
                  <Link
                    className="block py-3 lg:py-7 px-6 border-b-2 border-transparent"
                    href="/#contact"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="text-2xl">|</li>
                <FaRegUser className="text-xl m-5 mr-0" />
                {showLoggedIn()}
              </ul>
            </div>
          </div>
          {/* Mobile Menu - Dropdown Format */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:hidden bg-white w-full mt-2 rounded-lg shadow-lg`}
          >
            <ul className="flex flex-col text-gray-900 text-sm font-bold">
              <li className="relative hover:bg-gray-100 border-b border-gray-200">
                <Link
                  className="block py-3 px-6"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="relative hover:bg-gray-100 border-b border-gray-200">
                <Link
                  className="block py-3 px-6"
                  href="/deposit"
                >
                  Deposits
                </Link>
              </li>
              <li className="relative hover:bg-gray-100 border-b border-gray-200">
                <Link
                  className="block py-3 px-6"
                  href="/view-deposit"
                >
                  View deposits
                </Link>
              </li>
              <li className="relative hover:bg-gray-100 border-b border-gray-200">
                <Link
                  className="block py-3 px-6"
                  href="/#contact"
                >
                  Contact us
                </Link>
              </li>
              <li className="relative hover:bg-gray-100 py-3 px-6">
                <FaRegUser className="inline-block text-xl mr-2" />
                {showLoggedIn()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
      {/* end header */}
    </>




  )
}

export default Navbar
