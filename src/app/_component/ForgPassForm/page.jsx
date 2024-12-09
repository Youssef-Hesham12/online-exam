"use client"

import axios from 'axios'
import { useFormik } from 'formik'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

export default  function ForgetForm() {
  let routeur=useRouter()
  async function hanldlelogin(objectofApi){
    let {data}=await axios.post("https://exam.elevateegy.com/api/v1/auth/forgotPassword",objectofApi)
  console.log(data)
    if (data.message=="success"){
      console.log("hello")
          routeur.push('/VerfiCode')
    }
 
      
}
  let myform=useFormik({
     initialValues:{
      
      
        email: "",
       
    
     },
     onSubmit:hanldlelogin
  })
  return (
    <>
     <div className=" flex w-full flex-col  justify-center items-center h-full ">
      <form
        onSubmit={myform.handleSubmit}
        className="  w-[35%] flex flex-col gap-6  "
      >
        <p className="font-semibold text-lg">Forgot your password</p>

        <input
          type="email"
          className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
          placeholder="email"
          value={myform.values.email}
          name='email'
          onChange={myform.handleChange}  
          autoComplete='off'      />
   
        <p className="text-xs text-[#122D9C]   text-end">Recover Password ?</p>
        <button
          type="submit"
          className="bg-[#4461F2] text-white font-light text-sm w-full p-3 rounded-2xl"
        >
          {" "}
          Sign in{" "}
        </button>
      </form>
      <div className=" flex gap-3 items-center">
        <div className="divider h-[1px] bg-[#E7E7E7] w-12"></div>
        <p> or Continue with</p>
        <div className="divider  h-[1px] bg-[#E7E7E7] w-12"></div>
      </div>
      <div className="social-login flex gap-4">
        <div onClick={() => signIn('facebook',{ callbackUrl: '/Home' })} className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Vector.png"} />
        </div>
        <div onClick={() => signIn('google',{ callbackUrl: '/Home' })} className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo Google.png"} />
        </div>
        <div onClick={() => signIn('github',{ callbackUrl: '/Home' })} className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer">
          <Image width={20} height={20} alt="google" src={"/Logo.png"} />
        </div>
        <div
          // onClick={() => signIn("github", { callbackUrl: "/client" })}
          className="login-item flex justify-center hover:shadow-lg items-center border p-2 shadow-md rounded-lg cursor-pointer"
        >
          <Image width={20} height={20} alt="google" src={"/Logo (1).png"} />
        </div>
      </div>
     
    </div>
    
    </>
  )
}
