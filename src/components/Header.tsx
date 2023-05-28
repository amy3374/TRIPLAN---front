import React, { useEffect, useState } from 'react'
import Logo from './ui/Logo'
import { Link, useNavigate } from 'react-router-dom'
import User from './User';


export default function Header() {
const [user,setUser] = useState<any>();
const navigiate = useNavigate()

useEffect(()=>{
setUser(window.localStorage.getItem("User"))
  console.log(user);
  
},[])

const goToLogin = () => {
  navigiate('/login')
}
const logout = ()=>{
  window.localStorage.removeItem("User")
  setUser(null);
}
  return (

      

    <div className="flex justify-between items-center p-3 px-8 h-[10%]">
     <Link to="/"><Logo /></Link>
      {user ? 
      <div>
        <button className="bg-green p-2 rounded-xl text-white" onClick={logout}>로그아웃</button>
        <User/>
      </div>
       :
      <button className="bg-green p-2 rounded-xl text-white" onClick={goToLogin}>로그인</button>}
    </div>
   
  );
}
