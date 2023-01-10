import React from 'react';
import {useNavigate} from "react-router-dom";

export default function BackToMenuButton() {

  const nav = useNavigate()

  return <div
    className='mt-10 border-b border-dark-400 cursor-pointer hover:text-teal-500 hover:border-teal-500'
    onClick={() => nav('/menu')}>
    Back To The Menu
  </div>

}
