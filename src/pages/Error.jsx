import React from 'react';
import { Link } from 'react-router';

const Error = () => {
   
    return (
        <div>
                  <div >

          <div className='flex flex-col justify-center items-center mt-[100px]'>
            {/* <img src={img404} alt="" /> */}
          <p className='font-bold text-5xl'>Oops, page not found!</p>
          <p className='text-gray-500 m-[20px]'>The page you are looking for is not available.</p>
          <Link to={'/'} className='btn p-4 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</Link>
          </div>
            
        </div>
        </div>
    
    );
};

export default Error;