import React from 'react'

interface UserProps {
    user:string;
    name:string;
  }
const User = ({user}:{user:UserProps}) => {
  return (
    <div className='flex justify-center mt-2 mr-2 '>
      <span className='ml-2 mr-2 font-bold'>{user.name}님</span>
    </div>
  )
}

export default User
