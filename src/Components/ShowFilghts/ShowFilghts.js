import React from 'react';
import { AiOutlineDown, AiOutlineSwap } from "react-icons/ai";

const ShowFilghts = () => {
    return (
        <div className='px-10'>
            <h1 className='mb-5'>Where are you flying? </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 gap-6 mt-12'>
                <div className='border-x-4 lg:border-b-4'>
                    <h3 className='text-center flex justify-center lg:flex md:flex sm:hidden -mt-8'>Depart- Return</h3>
                    <h2 className='mx-auto flex justify-center lg:flex md:flex sm:hidden mt-2'>Lahore-Karachi <AiOutlineSwap className='ml-8 mt-2'></AiOutlineSwap></h2>

                </div>
                <div  className='border-x-4 border-b-4 text-center'>
                <div  className="dropdown ">
                    <h2 className='-mt-8'>Trip</h2>
                <label tabIndex={0} className="flex items-center  m-1">Return <AiOutlineDown tabIndex={0} className='ml-6'></AiOutlineDown></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
                </div>
                </div>
                <div className='border-x-4 lg:border-b-4'>
                <h3 className='text-center flex justify-center lg:flex md:flex sm:hidden -mt-8'>Depart- Return</h3>
                    <h2 className='mx-auto flex justify-center lg:flex md:flex sm:hidden mt-2'>07 Nov 22-13 Nov 22</h2>
                </div>
                <div className=' border-x-4 border-b-4 border-t-1'>
                    <h3 className='text-center flex justify-center lg:flex md:flex sm:hidden -mt-8'>Passenger - Class</h3>
                    <h2 className='mx-auto flex justify-center lg:flex md:flex sm:hidden mt-2'>1 Passenger,Economy</h2>
                </div>
            </div>
        </div>
    );
};

export default ShowFilghts;