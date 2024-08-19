'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DepositDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchDepositDetails = async () => {
    const res = await axios.get('http://localhost:5000/fd/getbyid/' + id)
    const data = res.data;
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    fetchDepositDetails();
  }, []);

  function calculateFDMaturity(principal = 45000, years, compoundingFrequency = 3, annualRate = 4.5) {
    // Convert annual rate percentage to decimal
    const rate = annualRate / 100;

    // Calculate the maturity amount using the compound interest formula
    const maturityAmount = principal * Math.pow((1 + rate / compoundingFrequency), (compoundingFrequency * years));

    return maturityAmount;
  }

  const displayDetails = () => {
    if (!data) return <h1>Loading ... </h1>
    else {
      return <div className='m-28 pl-28 pb-28 pr-10 pt-10 border-4 border-black max-w-xlg'>

        <img className='h-32  w-32 inline' src="/logo.jpg" alt="" />
        <h1 className=' pl-6 ml-6 inline font-bold text-5xl'>MY BANK</h1>
        <p className='text-center font-bold text-3xl '>Fixed Deposit Receipt</p>


        <div className='border-2 border-black mt-10 mb-10 p-4'>
          <h1 className='font-bold text-xl' >Received from :</h1>
          <div>
          <h1 className='pl-28 ml-12 inline'>NAME</h1>
          <h1 className='pl-16 ml-12 inline uppercase'>: {data.holder_name}</h1>
          </div>
          <div className='mt-2'>
          <h1 className='pl-28 ml-12 inline ' >ADDRESS </h1>
          <h1 className='pl-10 ml-10 inline' >: {data.address}</h1>
          </div>
          <div className='mt-2'>
          <h1 className='pl-28 ml-12 inline' >PHONE NUMBER</h1>
          <h1 className='pl-7 m-0.5 inline' >: {data.contact}</h1>
          </div>
          <div className='mt-2'>
          <h1 className='pl-28 ml-12 inline' >EMAIL</h1>
          <h1 className='pl-14 ml-14 inline' >: {data.email}</h1>
          </div>
          <div className='mt-2'>
          <h1 className='pl-28 ml-12 inline' >PAN NUMBER</h1>
          <h1 className='pl-4 ml-10 inline' >: {data.pan}</h1>
          </div>
          <div className='mt-2'>
          <h1 className='pl-28 ml-12 inline' > BANK BRANCH </h1>
          <h1 className='pl-2 ml-8 inline' > : {data.branch}</h1>
          </div>
          <div className='mt-2'>
          <h1 className='pl-28 ml-12 inline' >IFSC CODE</h1>
          <h1 className='pl-7 ml-12 inline' >: {data.ifsc}</h1>
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-center text-gray-800">
                    Interest rate <br />
                    %P.A
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-center font-semibold uppercase tracking-wide text-gray-800">
                    Start Date
                  </span>
                </div>
              </th>
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-center font-semibold uppercase tracking-wide text-gray-800">
                    Maturity Date
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
                    <h1>{data.acc_number}</h1>
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-center text-gray-800">
                    Interest rate <br />
                    %P.A
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
              <th scope="col" className="px-6 border-2 border-black py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs text-center font-semibold uppercase tracking-wide text-gray-800">
                    <h1>{new  Date(data.createdAt).toLocaleDateString()}</h1>
                  </span>
                </div>
              </th>

            </tr>
          </thead>
        </table>


        <div className='border-2 border-black mt-10 p-10'>
          <div>
          <h4 className='inline '>Date Of Issue</h4>
          <h4 className='ml-28 inline '>: {new Date(data.createdAt).toLocaleDateString()}</h4>
          </div>
          <div>
          <h4 className='inline ' >Intrest Calculation Method</h4>
          <h4 className='inline pl-4' >:Compound method</h4>
          </div>
          <div>
          <h4 className=' inline' >Maturity Amount </h4>
          <h4 className=' inline ml-20 pl-1 '> :</h4>
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
