import React from 'react'
import Lottie from "lottie-react";
import animate from '../../public/ErrorPlay.json'
const NotFound = () => {
  return (
    <>
    <div className=" flex flex-col justify-center items-center min-h-screen">
    <Lottie className=' w-[600px] h-[600px]' animationData={animate}/> 
    <h1 className=' text-4xl font-bold'>Oops! You came to the wrong page.</h1>
    </div>
    </>
  )
}

export default NotFound