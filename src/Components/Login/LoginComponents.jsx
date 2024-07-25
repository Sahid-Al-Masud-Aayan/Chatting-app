import React, { useState } from 'react'
import Lottie from "lottie-react";
import signup from '../../../public/device.json'
import { RiEyeCloseLine } from 'react-icons/ri';
import { BsEye } from 'react-icons/bs';
import './Login.css'

const LoginComponents = () => {
  // variables
  const [emaildefault, emailchanger]=useState('')
  const [emailError, emailchangerError]=useState('')
  const [Passworddefault,Passwordchanger]=useState('')
  const [PasswordError,PasswordchangerError]=useState('')

  const [deafault, change]= useState(false)
  const show = ()=>{
     change(!deafault)
 }
//  Functions
const emailMangaer= (e)=>{
  emailchanger(e.target.value)
  emailchangerError('')
}
const PasswordManager= (e)=>{
  Passwordchanger(e.target.value)
  PasswordchangerError('')
}
//submit function
const finalSubmit=(e)=>{
  e.preventDefault()
  if(!emaildefault){
    emailchangerError('Enter your email!')
  }if(!Passworddefault){
    PasswordchangerError('Enter your password!')
  }else{
    console.log('login done')
  }
}
  return (
    <>
    <div className="maindivtwo">
        <div className=" w-[1114px] h-[616px] rounded-[40px] maindiv">
      <div className="flex flex-row justify-between">
        <form onSubmit={finalSubmit}>
          <div className=" flex flex-col p-12">
        <div className=" flex flex-col justify-center items-center "> 
        <h3 className=' font-semibold text-[40px] text-[#333333] '>Welcome Back</h3>
        <p className=' font-normal text-2xl text-[#3e91ff] mb-8'>We’re so excited to see you again!</p>
      </div>
      <p className=' font-normal text-[16px] text-[#70aeff] mb-[7px]'>Email</p>
      <input onChange={emailMangaer} className=' h-[56px] w-[484px] border-[#5fa5ff] border-[1px] outline-2 outline-[#0004ff] rounded-xl pl-5' type="email" />
      <p className=' text-xs font-medium text-[#ff2c2c]'>{emailError}</p>
      <p className=' font-normal text-[16px] text-[#70aeff] mb-[7px] mt-[24px] '>Password</p>
      <div className=" relative w-[484px]">
        {
        deafault?
          <RiEyeCloseLine onClick={show} className=' absolute top-[25%] left-[90%] text-[#0004ff] text-2xl' />
          :
          < BsEye onClick={show}  className=' absolute top-[25%] left-[90%] text-[#0004ff] text-2xl' />
        }
        <input onChange={PasswordManager}  className=' h-[56px] w-[484px] border-[#5fa5ff] border-[1px] outline-2 outline-[#0004ff] rounded-xl pl-5' type={deafault? 'text':"password"} />
        <p className=' text-xs font-medium text-[#ff2c2c]'>{PasswordError}</p>
      </div>
      <a href="#"><p className=' font-medium text-[14px] text-[#294ad0] ml-[325px] mt-[10px]'>Forgot your password?</p></a>
        <div className="flex flex-col justify-center items-center ">
        <button type='submit' className=' w-[484px] h-[64px] bg-gradient-to-r from-[#00ebff] to-[#0004ff] duration-75 rounded-[32px] text-[22px] mt-[32px] font-medium text-white mb-8 active:scale-[1.1] '>Log in</button>
      <p className=' font-normal text-[16px] text-[#2f89ff]  items-center'>Don't have an account? <span className=' font-medium text-[#0004ff]'><a href="#">Sign up</a></span></p>
      </div>
    </div> 
      </form>
    <div className=' flex flex-col justify-center items-center'>
      <Lottie className=' w-[500px] h-[500px]' animationData={signup}/> 
      <h3 className=' font-bold text-[40px] text-[#333333] '>Log in to your account</h3>
      <p className=' font-normal text-xl text-[#5fa5ff] mb-8'>To watch your chats, please log in.</p>
    </div>


      </div>
      
    </div>
    </div>
    </>
  )
}

export default LoginComponents