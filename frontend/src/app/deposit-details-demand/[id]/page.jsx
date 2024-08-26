'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DepositDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchDepositDetails = async () => {
    const res = await axios.get('http://localhost:5000/demand/getbyid/' + id);
    const data = res.data;
    console.log(data);
    setData(data);
  };

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
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`Fixed_Deposit_Receipt_${id}.pdf`);
    });
  };

  const displayDetails = () => {
    if (!data) return <h1>Loading ... </h1>;
    else {
      return (
        <div id="receipt" className="m-4 p-4 border-4 border-black max-w-full overflow-auto sm:m-10 sm:p-10">
          <div className="flex items-center justify-center">
            <img className="h-24 w-24 sm:h-32 sm:w-32" src="/logo.jpg" alt="Bank Logo" />
            <h1 className="ml-4 text-3xl font-bold sm:text-5xl">MY BANK</h1>
          </div>
          <p className="text-center text-xl font-bold sm:text-3xl">Demand Deposit Receipt</p>

          <div className="border-2 border-black mt-6 mb-6 p-4 sm:mt-10 sm:mb-10">
            <h1 className="font-bold text-lg sm:text-xl">Received from :</h1>
            <div className="mt-2">
              <h1 className="inline">NAME:</h1>
              <h1 className="inline ml-4 uppercase">{data.name}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">CURRENT ADDRESS:</h1>
              <h1 className="inline ml-4">{data.current_Address}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">PERMANENT ADDRESS:</h1>
              <h1 className="inline ml-4">{data.permanent_Address}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">PHONE NUMBER:</h1>
              <h1 className="inline ml-4">{data.number}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">EMAIL:</h1>
              <h1 className="inline ml-4">{data.email}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">PAN NUMBER:</h1>
              <h1 className="inline ml-4">{data.pan}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">AADHAR NUMBER:</h1>
              <h1 className="inline ml-4">{data.aadhar}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">BANK BRANCH:</h1>
              <h1 className="inline ml-4">{data.branch}</h1>
            </div>
            <div className="mt-2">
              <h1 className="inline">IFSC CODE:</h1>
              <h1 className="inline ml-4">{data.ifsc}</h1>
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-2 text-start border-2 border-black text-xs font-semibold text-gray-800 sm:px-6 sm:py-3">
                  Account number
                </th>
                <th className="px-4 py-2 text-start border-2 border-black text-xs font-semibold text-gray-800 sm:px-6 sm:py-3">
                  Amount
                </th>
                <th className="px-4 py-2 text-start border-2 border-black text-xs font-semibold text-gray-800 sm:px-6 sm:py-3">
                  Deposit Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-2 border-black sm:px-6 sm:py-3">
                  <span className="text-xs text-gray-800 sm:text-base">{data.acc_number}</span>
                </td>
                <td className="px-4 py-2 border-2 border-black sm:px-6 sm:py-3">
                  <span className="text-xs text-gray-800 sm:text-base">₹{data.Initial_Deposit_Amount}</span>
                </td>
                <td className="px-4 py-2 border-2 border-black sm:px-6 sm:py-3">
                  <span className="text-xs text-gray-800 sm:text-base">{new Date(data.createdAt).toLocaleDateString()}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-2 border-black mt-6 p-6 sm:mt-10 sm:p-10">
            <div>
              <h4 className="inline">Date Of Deposit:</h4>
              <h4 className="inline ml-4">{new Date(data.createdAt).toLocaleDateString()}</h4>
            </div>
          </div>
          <h4 className="text-right mt-16 mr-10 sm:mt-28 sm:mr-28">Signature</h4>
          <button
            onClick={downloadReceipt}
            className="mt-6 py-2 px-4 bg-blue-500 text-white font-bold rounded sm:mt-16">
            Download Receipt
          </button>
        </div>
      );
    }
  };

  return <div>{displayDetails()}</div>;
};

export default DepositDetails;
