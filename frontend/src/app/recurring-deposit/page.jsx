'use client';
import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';

const RecurringDeposit = () => {

    const recurringForm = useFormik({
        initialValues: {
            name: '',
            dob: '',
            gender: '',
            current_Address: '',
            permanent_Address: '',
            email: '',
            number: '',
            pan: '',
            aadhar: '',
            acc_number: '',
            each_deposit_Amount: '', //The amount you are depositing to open the account.
            tenure: '',
            branch: '',
            ifsc: '',
        },
        onSubmit: (values) => {
            console.log(values);
            // send values to backend

            axios.post('http://localhost:5000/recurring/add', values)
                .then((response) => {
                    console.log(response.status);
                    toast.success('Your recurring Deposit has been added');
                }).catch((err) => {
                    console.log(err);
                    toast.error('Some Error Occured');
                });

        }

    })
    return (
        <div>
            <>
                {/* Card Section */}
                <div className="max-w-4xl mt-28 m-12 px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                    {/* Card */}
                    <div className="bg-white rounded-xl shadow shadow-gray-700 p-4 sm:p-7">
                        <div className="mb-8">
                            <h2 className="text-4xl text-center font-bold text-gray-500">Recurring Deposit</h2>

                        </div>
                        <form onSubmit={recurringForm.handleSubmit}>
                            {/* Grid */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-full-name"
                                        className="inline-block text-sm text-black-800 mt-2.5"
                                    >
                                        Full name
                                    </label>
                                    <div className="hs-tooltip inline-block">
                                        <svg
                                            className="hs-tooltip-toggle ms-1 inline-block size-3 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                        <span
                                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm"
                                            role="tooltip"
                                        >

                                        </span>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input

                                            type="text"
                                            id='name'
                                            onChange={recurringForm.handleChange}
                                            value={recurringForm.values.name}
                                            className="py-2 px-3 pe-11 border-2 block w-full border-gray-300 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="Name"
                                            required
                                        />

                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Email
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="email"
                                        id='email'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.email}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Email"
                                        required
                                    />
                                </div>


                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-account-phone"
                                            className="inline-block text-sm text-gray-800 mt-2.5"
                                        >
                                            Phone
                                        </label>

                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input
                                            type="number"
                                            id='number'
                                            onChange={recurringForm.handleChange}
                                            value={recurringForm.values.number}
                                            className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="+x(xxx)xxx-xx-xx"
                                            required
                                        />

                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-gender-checkbox"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Gender
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <label
                                            htmlFor="af-account-gender-checkbox"
                                            className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <input
                                                type="radio"
                                                name="gender"
                                                onChange={recurringForm.handleChange}
                                                value='male'
                                                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                defaultChecked=""
                                                required
                                            />
                                            <span className="text-sm text-gray-500 ms-3">Male</span>
                                        </label>
                                        <label
                                            htmlFor="af-account-gender-checkbox-female"
                                            className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <input
                                                type="radio"
                                                name="gender"
                                                onChange={recurringForm.handleChange}
                                                value='female'
                                                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                required
                                            />
                                            <span className="text-sm text-gray-500 ms-3">Female</span>
                                        </label>
                                        <label
                                            htmlFor="af-account-gender-checkbox-other"
                                            className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        >
                                            <input
                                                type="radio"
                                                name="gender"
                                                onChange={recurringForm.handleChange}
                                                value='other'
                                                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                                required
                                            />
                                            <span className="text-sm text-gray-500 ms-3">Other</span>
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-bio"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Current Address
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <textarea
                                        type="text"
                                        id='current_Address'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.current_Address}
                                        className="py-2 px-3 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        rows={3}
                                        placeholder="Current address"
                                        defaultValue={""}
                                        required
                                    />
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-bio"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Permanent Address
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <textarea
                                        type="text"
                                        id='permanent_Address'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.permanent_Address}
                                        className="py-2 px-3 block w-full border-2 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        rows={3}
                                        placeholder="Permanent address"
                                        defaultValue={""}
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Account number
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="number"
                                        id='acc_number'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.acc_number}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="xxxx-xxxx-xxxx"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        IFSC code
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="number"
                                        id='ifsc'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.ifsc}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder='xxxx-xxxx-xxxx'
                                        required


                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Aadhar number
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="number"
                                        id='aadhar'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.aadhar}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="xxxx-xxxx-xxxx"
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        PAN number
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="number"
                                        id='pan'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.pan}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder='xxxx-xxxx-xxxx'
                                        required
                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Date of dirth
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="date"
                                        id='dob'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.dob}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder='DD/MM/YYYY'
                                        required
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Each deposit amount
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="number"
                                        id='each_deposit_Amount'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.each_deposit_Amount}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder='Each installment'
                                        required


                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Tenure
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="number"
                                        id='tenure'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.tenure}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder='Number of years'
                                        required


                                    />
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-account-email"
                                        className="inline-block text-sm text-gray-800 mt-2.5"
                                    >
                                        Branch
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <input
                                        type="text"
                                        id='branch'
                                        onChange={recurringForm.handleChange}
                                        value={recurringForm.values.branch}
                                        className="py-2 px-3 pe-11 block w-full border-2 border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        required

                                    />
                                </div>


                            </div>

                            {/* End Grid */}
                            <div className="mt-5 flex justify-end gap-x-2">
                                <button
                                    type="button"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div >
                    {/* End Card */}
                </div >
                {/* End Card Section */}
            </>
        </div>
    )
}

export default RecurringDeposit