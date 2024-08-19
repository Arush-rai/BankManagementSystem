'use client';
import axios from 'axios'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ListDeposit = () => {

    const [depositData, setDepositData] = useState([]);

    const fetchData = async () => {
        const res = await axios.get('http://localhost:5000/fd/getall')
        const data = res.data;
        console.table(data);
        setDepositData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const displayData = () => {
        return <>
            {/* Table Section */}
            <div className="mt-10 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

                                <div className="border-b border-gray-200 hover:bg-gray-50">
                                    <button
                                        type="button"
                                        className="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800"
                                        id="hs-as-table"
                                        aria-expanded="false"
                                        aria-controls="hs-as-table-label"
                                        data-hs-collapse="#hs-as-table-label"
                                    >
                                        <svg
                                            className="hs-collapse-open:rotate-90 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                        Insights
                                    </button>
                                    <div
                                        id="hs-as-table-label"
                                        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-as-table"
                                    >
                                        <div className="pb-4 px-6">
                                            <div className="flex items-center space-x-2">
                                                <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white">
                                                    <svg
                                                        className="shrink-0 size-3.5"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <polyline points="20 6 9 17 4 12" />
                                                    </svg>
                                                </span>
                                                <span className="text-sm text-gray-800">
                                                    There are no insights for this period.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Collapse */}
                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        Account number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        Branch
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        PAN Card Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        Contact
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        Created At
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end" />
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">

                                        {
                                            depositData.map(deposit => (
                                                <tr key={deposit} className="bg-white hover:bg-gray-50">
                                                    <td className="size-px whitespace-nowrap">
                                                        <button
                                                            type="button"
                                                            className="block"
                                                            aria-haspopup="dialog"
                                                            aria-expanded="false"
                                                            aria-controls="hs-ai-invoice-modal"
                                                            data-hs-overlay="#hs-ai-invoice-modal"
                                                        >
                                                            <span className="block px-6 py-2">
                                                                <span className="font-mono text-sm text-blue-600">
                                                                    {deposit.acc_number}
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <button
                                                            type="button"
                                                            className="block"
                                                            aria-haspopup="dialog"
                                                            aria-expanded="false"
                                                            aria-controls="hs-ai-invoice-modal"
                                                            data-hs-overlay="#hs-ai-invoice-modal"
                                                        >
                                                            <span className="block px-6 py-2">
                                                                <span className="text-sm text-gray-600">
                                                                    {deposit.branch}
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <button
                                                            type="button"
                                                            className="block"
                                                            aria-haspopup="dialog"
                                                            aria-expanded="false"
                                                            aria-controls="hs-ai-invoice-modal"
                                                            data-hs-overlay="#hs-ai-invoice-modal"
                                                        >
                                                            <span className="block px-6 py-2">
                                                                <span className="text-sm text-gray-600">
                                                                    {deposit.pan}
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <button
                                                            type="button"
                                                            className="block"
                                                            aria-haspopup="dialog"
                                                            aria-expanded="false"
                                                            aria-controls="hs-ai-invoice-modal"
                                                            data-hs-overlay="#hs-ai-invoice-modal"
                                                        >
                                                            <span className="block px-6 py-2">
                                                                <span className="text-sm text-gray-600">
                                                                    {deposit.contact}
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <button
                                                            type="button"
                                                            className="block"
                                                            aria-haspopup="dialog"
                                                            aria-expanded="false"
                                                            aria-controls="hs-ai-invoice-modal"
                                                            data-hs-overlay="#hs-ai-invoice-modal"
                                                        >
                                                            <span className="block px-6 py-2">
                                                                <span className="text-sm text-gray-600">
                                                                    {new Date(deposit.createdAt).toLocaleDateString()}&nbsp;&nbsp;
                                                                    {new Date(deposit.createdAt).toLocaleTimeString()}
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <Link
                                                            href={'/deposit-details-fixed/' + deposit._id}
                                                            type="button"
                                                            className="block"
                                                            aria-haspopup="dialog"
                                                            aria-expanded="false"
                                                            aria-controls="hs-ai-invoice-modal"
                                                            data-hs-overlay="#hs-ai-invoice-modal"
                                                        >
                                                            <span className="px-6 py-1.5">
                                                                <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                                                                    <svg
                                                                        className="shrink-0 size-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={16}
                                                                        height={16}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                                                        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                                                    </svg>
                                                                    View
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                                {/* End Table */}
                                {/* Footer */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold text-gray-800">{depositData.length}</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button
                                                type="button"
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                <svg
                                                    className="size-3"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                Prev
                                            </button>
                                            <button
                                                type="button"
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                Next
                                                <svg
                                                    className="size-3"
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Footer */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Card */}
            </div>
        </>

    }

    return (
        <div>
            {displayData()}
        </div>
    )
}

export default ListDeposit;