import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigiate= useNavigate()
    const loginUser=()=>{
        console.log("login success")
        navigiate("/")
    }
  return (
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center">
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" required placeholder="Username"/>
        </div>
        <div>
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" required minLength={7} placeholder="******************"/>
        </div>
        <div className="flex flex-col justify-between">
            <a className="mb-6 inline-block align-baseline font-bold text-sm" href="#">
                Forgot Password?
            </a>
            <button className="bg-pink text-white font-bold py-2 px-4 rounded" onClick={loginUser} type="button">
                Login
            </button>
            <button className="bg-white text-pink font-bold py-2 px-4 rounded" type="button">
                Sign in to your account
            </button>
        </div>
    </div>
  )
}

export default Login
