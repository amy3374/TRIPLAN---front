import React from 'react'
import { Link } from 'react-router-dom';
interface UserProps {
    user:string;
    name:string;
  }
const User = ({user}:{user:UserProps}) => {
  return (
    <div className='flex mt-1 ml-2'>
      <Link to="/myPlan"><span className='ml-2'>{user.name}님</span></Link>
    </div>
  )
}

export default User
