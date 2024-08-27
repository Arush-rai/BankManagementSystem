'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



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

  function calculateFDMaturity(principal, years, rate = 9) {
    const maturityAmount = principal * Math.pow((1 + rate / 100), years);
    return maturityAmount;
  }

  function calculateInterest(principal, years) {
    const amt = calculateFDMaturity(data.amount, data.tenure);
    return amt - (data.amount);
  }

  const calculateMaturityDate = (date, tenure) => {
    let d = new Date(date);
    d.setFullYear(d.getFullYear() + tenure);
    return d.toLocaleDateString()
  }

  const downloadReceipt = async () => {
    const input = document.getElementById('receipt');
    html2canvas(input).then(async (canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, 'PNG', 0, 0);
      const pdfData = pdf.output('datauristring');
  
      //  Send the PDF via email
       try {
         const response = await axios.post('/api/sendEmail', {
        to: data.email,
         subject: 'Fixed Deposit Receipt',
           text: 'Please find attached your Fixed Deposit receipt.',
         attachment: pdfData.split(',')[1] // Extract base64 data
         });
         if (response.status === 200) {
           toast.success('Receipt sent to email!');
         }
       } catch (error) {
         toast.error('Failed to send email.');
       }
    });
  }
  
  

  const displayDetails = () => {
    if (!data) return <h1>Loading ... </h1>
    else {
      return (
        <div className='mr-2 m-2 sm:m-8 lg:m-16 p-2 sm:p-8 lg:p-16 mt-24 border-4 border-black max-w-full'>
          <div id="receipt">
            <div className='flex flex-col sm:flex-row items-center'>
              <img className='h-20 sm:h-32 w-20 sm:w-32' src="/logo.jpg" alt="Logo" />
              <h1 className='mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left font-bold text-2xl sm:text-4xl lg:text-5xl'>
                MY BANK
              </h1>
            </div>
            <p className='text-center mt-6 font-bold text-xl sm:text-2xl lg:text-3xl'>
              Fixed Deposit Receipt
            </p>

            <div className='border-2 border-black mt-6 sm:mt-10 p-4'>
              <h1 className='font-bold text-lg sm:text-xl'>Received from :</h1>
              <div className='mt-2 sm:mt-4'>
                <div className='flex flex-col sm:flex-row'>
                  <h1 className='sm:w-1/3'>NAME</h1>
                  <h1 className='uppercase sm:w-2/3'>: {data.holder_name}</h1>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                  <h1 className='sm:w-1/3'>ADDRESS</h1>
                  <h1 className='sm:w-2/3'>: {data.address}</h1>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                  <h1 className='sm:w-1/3'>PHONE NUMBER</h1>
                  <h1 className='sm:w-2/3'>: {data.contact}</h1>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                  <h1 className='sm:w-1/3'>EMAIL</h1>
                  <h1 className='sm:w-2/3'>: {data.email}</h1>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                  <h1 className='sm:w-1/3'>PAN NUMBER</h1>
                  <h1 className='sm:w-2/3'>: {data.pan}</h1>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                  <h1 className='sm:w-1/3'>BANK BRANCH</h1>
                  <h1 className='sm:w-2/3'>: {data.branch}</h1>
                </div>
                <div className='flex flex-col sm:flex-row mt-2'>
                  <h1 className='sm:w-1/3'>IFSC CODE</h1>
                  <h1 className='sm:w-2/3'>: {data.ifsc}</h1>
                </div>
              </div>
            </div>

            <table className='w-full mt-6 sm:mt-10 border-collapse mr-4'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800">
                    Account Number
                  </th>
                  <th className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800">
                    Amount
                  </th>
                  <th className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800">
                    Interest Rate %P.A
                  </th>
                  
                  <th className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800">
                    Maturity Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm">
                    {data.acc_number}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm">
                    ₹{data.amount}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm">
                    9%
                  </td>
                 
                  <td className="px-2 sm:px-3 py-2 sm:py-3 border border-black text-start text-xs sm:text-sm">
                    {calculateMaturityDate(data.createdAt, data.tenure)}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='border-2 border-black mt-6 sm:mt-10 p-4 sm:p-6'>
              <div className='flex justify-between'>
                <h4 className='font-medium text-sm sm:text-base'>Date Of Issue</h4>
                <h4 className='text-sm sm:text-base'>: {new Date(data.createdAt).toLocaleDateString()}</h4>
              </div>
              <div className='flex justify-between mt-2'>
                <h4 className='font-medium text-sm sm:text-base'>Interest Calculation Method</h4>
                <h4 className='text-sm sm:text-base'>: Compound method</h4>
              </div>
              <div className='flex justify-between mt-2'>
                <h4 className='font-medium text-sm sm:text-base'>Maturity Interest</h4>
                <h4 className='text-sm sm:text-base'>: ₹{calculateInterest(data.amount, data.tenure).toFixed(2)}</h4>
              </div>
              <div className='flex justify-between mt-2'>
                <h4 className='font-medium text-sm sm:text-base'>Maturity Amount</h4>
                <h4 className='text-sm sm:text-base'>: ₹{calculateFDMaturity(data.amount, data.tenure).toFixed(2)}</h4>
              </div>
            </div>

            <h4 className='text-right mt-10 sm:mt-20'>Signature</h4>
          </div>

          <button
            onClick={downloadReceipt}
            className='mt-8 sm:mt-16 py-2 px-4 bg-blue-500 text-white font-bold rounded'>
            Download Receipt
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      {displayDetails()}
    </div>
  )
}

export default DepositDetails;

