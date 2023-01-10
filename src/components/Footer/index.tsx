import React from 'react';
import {openGithub} from "@/utils/navigation";

const Footer = () =>
  (<div className='p-4 w-full bg-light-100 flex flex-col justify-center items-center tracking-wide'>
    {/* <p>I am always up for new challenges.</p> */}
    <div>
      <span className='pr-2'>MADE BY</span>
      <span className='cursor-pointer hover:text-green-400'
            onClick={openGithub}> @ALYENOR</span>
    </div>
  </div>)

export default Footer
