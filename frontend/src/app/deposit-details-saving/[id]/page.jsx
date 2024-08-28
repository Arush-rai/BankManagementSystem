'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  const downloadReceipt = () => {
    const input = document.getElementById('receipt');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`Saving_Deposit_Receipt_${id}.pdf`);
    });
  }

  const displayDetails = () => {
    if (!data) return <h1>Loading ... </h1>
    else {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-16">
          <div id="receipt" className='bg-white m-4 sm:m-10 p-4 sm:p-10 border-4 border-black max-w-4xl w-full'>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <img className='h-24 w-24 sm:h-32 sm:w-32' src="/logo.jpg" alt="Logo" />
              <h1 className='text-center sm:text-left sm:pl-6 sm:ml-6 font-bold text-3xl sm:text-5xl'>MY BANK</h1>
            </div>
            <p className='text-center font-bold text-xl sm:text-3xl mt-4'>Saving Deposit Receipt</p>

            <div className='border-2 border-black mt-6 sm:mt-10 mb-6 sm:mb-10 p-4'>
              <h1 className='font-bold text-lg sm:text-xl'>Received from :</h1>
              <div className='mt-2'>
                <h1 className='font-semibold '>NAME: <h1 className='font-normal inline-block aline-text-end uppercase'>{data.name}</h1></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>CURRENT ADDRESS: <span className='font-normal'>{data.current_Address}</span></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>PERMANENT ADDRESS: <span className='font-normal'>{data.permanent_Address}</span></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>PHONE NUMBER: <span className='font-normal'>{data.number}</span></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>EMAIL: <span className='font-normal'>{data.email}</span></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>PAN NUMBER: <span className='font-normal'>{data.pan}</span></h1>
              </div>
            </div>

            <table className='min-w-full divide-y divide-gray-800 text-sm sm:text-base'>
              <thead>
                <tr>
                  <th scope="col" className="px-2 sm:px-6 border-2 border-black py-3 text-start">
                    <span className="font-semibold uppercase tracking-wide text-gray-800">Account number</span>
                  </th>
                  <th scope="col" className="px-2 sm:px-6 border-2 border-black py-3 text-start">
                    <span className="font-semibold uppercase tracking-wide text-gray-800">Amount</span>
                  </th>
                  <th scope="col" className="px-2 sm:px-6 border-2 border-black py-3 text-start">
                    <span className="font-semibold uppercase tracking-wide text-gray-800">Deposit Date</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 sm:px-6 border-2 border-black py-3">
                    <span>{data.Acc_number}</span>
                  </td>
                  <td className="px-2 sm:px-6 border-2 border-black py-3">
                    <span>₹{data.amount}</span>
                  </td>
                  <td className="px-2 sm:px-6 border-2 border-black py-3">
                    <span>{new Date(data.createdAt).toLocaleDateString()}</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='border-2 border-black mt-6 sm:mt-10 p-4 sm:p-10'>
              <div>
                <h4 className='font-semibold'>Date Of Deposit</h4>
                <h4 className='ml-10 sm:ml-28'>{new Date(data.createdAt).toLocaleDateString()}</h4>
              </div>
            </div>
            <h4 className='text-right mt-16 sm:mt-28'>Signature</h4>

            <div className="flex justify-center sm:justify-self-start mt-8">
              <button
                onClick={downloadReceipt}
                className='py-2 px-4 aline-left bg-blue-500 text-white font-bold rounded'>
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {displayDetails()}
    </div>
  )
}

export default DepositDetails;
