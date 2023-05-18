import React, {useState}  from 'react'
import { useNavigate } from 'react-router-dom'

export type UserData = {
  name?: string;
  username?: string;

};

const Join = () => {
const [userInput, setUserInput] =useState<UserData>();
  const[usableId, setUsableId] = useState<number>(0)
   const navigate = useNavigate()
   const handleChange = (e:any)=>{
    const { name, value } = e.target;
    setUserInput((pre) => ({ ...pre, [name]: value }));
  }
  const usernameCheck =(e:any)=>{
    console.log(userInput);
    const {name, username} = userInput as UserData
   
    fetch('http://localhost:8000/checkUsername', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username
      })}) .then(res => res.json()     
      ).then(res=> {if(res.status===400)  setUsableId(400)
      if(res.status===200  )setUsableId(200)})
    }
  const createAccount=(e:any)=>{
    e.preventDefault()
    const {name, username,password,email} = e.target
   // console.log(name.value);
    fetch('http://localhost:8000/join', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSON.stringify({
        name:name.value,
        username:username.value,
        password:password.value,
        email:email.value,
      })
    }).then(res=>
      res.json()).then(res=>{
       if(res.status===200 ) return navigate("/login")
       if(res.status===400 ) return alert("This email is already taken")
       if(res.status===404 ) return navigate("/login")
       
       })
    
    // 
  }
  return (
      <form  className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center" onSubmit={createAccount}>
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
                name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="name" type="text" required placeholder="name"  onChange={handleChange}/>
        </div>
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="username" type="text" required placeholder="Username"onChange={handleChange}/>
            
            <button className="bg-pink text-white font-bold py-2 px-4 rounded" onClick={usernameCheck} type='button' >중복확인</button>
        </div>
        <div>{usableId===0 ?"" :(usableId===200?"사용 가능한":"사용 불가능한") }</div>
        <div>
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                Password
            </label>
            <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" name="password" type="password" required minLength={7} placeholder="******************"/>
        </div>
        <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" name="email" type="email" required placeholder="Email"/>
        </div>
        <div className="flex flex-col justify-between">
            <input className="bg-pink text-white font-bold py-2 px-4 rounded" type="submit" value="Join" />
        </div>
      </form>
  )
  }

export default Join
