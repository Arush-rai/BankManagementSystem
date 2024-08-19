'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DepositDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchDepositDetails = async () => {
    const res = await axios.get('http://localhost:5000/saving/getbyid/' + id)
    const data = res.data;
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    fetchDepositDetails();
  }, [])


  const displayDetails = () => {
    if (!data) return <h1>Loading ... </h1>
    else {
      return <div className='m-28 pl-28 pb-28 pr-10 pt-10 border-4 border-black max-w-xlg'>

        <img className='h-32  w-32 inline' src="/logo.jpg" alt="" />
        <h1 className=' pl-6 ml-6 inline font-bold text-5xl'>MY BANK</h1>
        <p className='text-center font-bold text-3xl '>Saving Deposit Receipt</p>


        <div className='border-2 border-black mt-10 mb-10 p-4'>
          <h1 className='font-bold text-xl' >Received from :</h1>
          <div>
            <h1 className='pl-28 ml-12 inline'>NAME</h1>
            <h1 className='pl-16 ml-12 inline uppercase'>: {data.name}</h1>
          </div>
          <div className='mt-2'>
            <h1 className='pl-28 ml-12 inline ' > CURRENT ADDRESS </h1>
            <h1 className='pl-10 ml-10 inline' >: {data.current_Address}</h1>
          </div>
          <div className='mt-2'>
            <h1 className='pl-28 ml-12 inline ' >PERMANENT  ADDRESS </h1>
            <h1 className='pl-10 ml-10 inline' >: {data.permanent_Address}</h1>
          </div>
          <div className='mt-2'>
            <h1 className='pl-28 ml-12 inline' >PHONE NUMBER</h1>
            <h1 className='pl-7 m-0.5 inline' >: {data.number}</h1>
          </div>
          <div className='mt-2'>
            <h1 className='pl-28 ml-12 inline' >EMAIL</h1>
            <h1 className='pl-14 ml-14 inline' >: {data.email}</h1>
          </div>
          <div className='mt-2'>
            <h1 className='pl-28 ml-12 inline' >PAN NUMBER</h1>
            <h1 className='pl-4 ml-10 inline' >: {data.pan}</h1>
          </div>
          
        </div>


        <table className='min-w-full divide-y divide-gray-800 '>
          <thead >
            <tr  >
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold text-center uppercase tracking-wide text-gray-800">
                    Account number
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase text-center tracking-wide text-gray-800">
                    Amount
                  </span>
                </div>
              </th>

              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-center font-semibold uppercase tracking-wide text-gray-800">
                    Deposit Date
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <thead >
            <tr  >
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold text-center uppercase tracking-wide text-gray-800">
                    <h1>{data.Acc_number}</h1>
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase text-center tracking-wide text-gray-800">
                    <h1>₹{data.amount}</h1>
                  </span>
                </div>
              </th>

              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-center font-semibold uppercase tracking-wide text-gray-800">
                    {new Date(data.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </th>

            </tr>
          </thead>
        </table>


        <div className='border-2 border-black mt-10 p-10'>
          <div>
            <h4 className='inline '>Date Of Deposit</h4>
            <h4 className='ml-28 inline '>: {new Date(data.createdAt).toLocaleDateString()}</h4>
          </div>


        </div>
        <h4 className='text-right mt-28 mr-28'>Signature</h4>

      </div>
    }
  }


  return (
    <div>
      {displayDetails()}
    </div>
  )
}

export default DepositDetails
