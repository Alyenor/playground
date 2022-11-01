import React from 'react';
import {openGithub} from "@/utils/navigation";

const Footer = () =>
  (<div className='p-4 bg-light-100 flex justify-center items-center tracking-wide'>
    MADE BY
    <span className='cursor-pointer hover:text-green-400 pl-2'
          onClick={openGithub}> @ALYENOR</span>
  </div>)

export default Footer
