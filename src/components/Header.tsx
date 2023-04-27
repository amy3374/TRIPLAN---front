import React from 'react'
import Logo from './ui/Logo'
import { Link, useNavigate } from 'react-router-dom'



export default function Header() {
const navigiate = useNavigate()
const goToLogin = () => {
  navigiate('/login')
}
  return (

      

    <div className="flex justify-between items-center p-3 px-8 h-[10%]">
     <Link to="/"><Logo /></Link>
      <button className="bg-green p-2 rounded-xl text-white" onClick={goToLogin}>로그인</button>
    </div>
   
  );
}
