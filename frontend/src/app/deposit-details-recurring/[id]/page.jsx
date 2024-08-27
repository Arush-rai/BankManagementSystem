'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DepositDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchDepositDetails = async () => {
    const res = await axios.get('http://localhost:5000/recurring/getbyid/' + id);
    const data = res.data;
    setData(data);
  }

  useEffect(() => {
    fetchDepositDetails();
  }, []);

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
      pdf.save(`Recurring_Deposit_Receipt_${id}.pdf`);
    });
  }

  const displayDetails = () => {
    if (!data) return <h1>Loading ...</h1>
    else {
      return (
        <div className="flex justify-center mt-16 items-center min-h-screen bg-gray-100">
          <div id="receipt" className="bg-white m-4 sm:m-10 p-4 sm:p-10 border-4 border-black max-w-4xl w-full">
            <div className="flex flex-col sm:flex-row items-center sm:justify-start">
              <img className='h-24 w-24 sm:h-32 sm:w-32' src="/logo.jpg" alt="Logo" />
              <h1 className='text-center sm:text-left sm:pl-6 sm:ml-6 font-bold text-3xl sm:text-5xl'>MY BANK</h1>
            </div>
            <p className='text-center font-bold text-xl sm:text-3xl mt-4'>Recurring Deposit Receipt</p>

            <div className='border-2 border-black mt-6 sm:mt-10 mb-6 sm:mb-10 p-4'>
              <h1 className='font-bold text-lg sm:text-xl'>Received from:</h1>
              <div className='mt-2'>
                <h1 className='font-semibold'>NAME: <span className='font-normal uppercase'>{data.name}</span></h1>
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
              <div className='mt-2'>
                <h1 className='font-semibold'>AADHAR NUMBER: <span className='font-normal'>{data.aadhar}</span></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>BANK BRANCH: <span className='font-normal'>{data.branch}</span></h1>
              </div>
              <div className='mt-2'>
                <h1 className='font-semibold'>IFSC CODE: <span className='font-normal'>{data.ifsc}</span></h1>
              </div>
            </div>

            <table className='min-w-full divide-y divide-gray-800'>
              <thead>
                <tr>
                  <th scope="col" className="px-2 sm:px-6 border-2 border-black py-2 sm:py-3 text-start">
                    <span className="text-xs sm:text-sm font-semibold text-center uppercase tracking-wide text-gray-800">
                      Account Number
                    </span>
                  </th>
                  <th scope="col" className="px-2 sm:px-6 border-2 border-black py-2 sm:py-3 text-start">
                    <span className="text-xs sm:text-sm font-semibold uppercase text-center tracking-wide text-gray-800">
                      Amount
                    </span>
                  </th>
                  <th scope="col" className="px-2 sm:px-6 border-2 border-black py-2 sm:py-3 text-start">
                    <span className="text-xs sm:text-sm text-center font-semibold uppercase tracking-wide text-gray-800">
                      Deposit Date
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 sm:px-6 border-2 border-black py-2 sm:py-3 text-start">
                    <h1>{data.acc_number}</h1>
                  </td>
                  <td className="px-2 sm:px-6 border-2 border-black py-2 sm:py-3 text-start">
                    <h1>₹{data.each_deposit_Amount}</h1>
                  </td>
                  <td className="px-2 sm:px-6 border-2 border-black py-2 sm:py-3 text-start">
                    <h1>{new Date(data.createdAt).toLocaleDateString()}</h1>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='border-2 border-black mt-6 sm:mt-10 p-4 sm:p-10'>
              <div>
                <h4 className='inline'>Date Of Deposit:</h4>
                <h4 className='ml-4 sm:ml-28 inline'>{new Date(data.createdAt).toLocaleDateString()}</h4>
              </div>
            </div>

            <h4 className='text-right mt-10 sm:mt-28 mr-4 sm:mr-28'>Signature</h4>
            
            <div className="text-center">
              <button
                onClick={downloadReceipt}
                className='mt-6 sm:mt-16 py-2 px-4 bg-blue-500 text-white font-bold rounded'>
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {displayDetails()}
    </div>
  );
}

export default DepositDetails;
