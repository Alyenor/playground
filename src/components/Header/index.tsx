import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Header() {

  const nav = useNavigate()

  return <div className='cursor-pointer p-4 bg-light-100 '>
    <div onClick={() => nav('/')}>
      Alyenor
    </div>

  </div>
}
