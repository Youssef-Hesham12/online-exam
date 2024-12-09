"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/navigation'




export default function Setpassword() {
 let router=useRouter()
  async function hanldlelogin(objectofApi){
    // 
    
  console.log("hi")
    console.log(objectofApi)
    let {data}=await axios.put("https://exam.elevateegy.com/api/v1/auth/resetPassword",objectofApi)
          if (data.message=="success"){
            router.push("/login")
          }
    
  }
  let myform= useFormik({
    initialValues:{
     
      email:"",
    newPassword: ""
   
    },
    onSubmit:hanldlelogin
 })
  return (
    <>
      <>
     
    
     <div className=" flex w-full flex-col  justify-center items-center h-full ">
      <form
        onSubmit={myform.handleSubmit}
        className="  w-[35%] flex flex-col gap-6  "
      >
        <p className="font-semibold text-lg">set a Password</p>

        <input
       
          type="email"
          name='email'
          className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
          placeholder="email"
          autoComplete='off'
          value={myform.values.email}
          onChange={myform.handleChange}
        />
    
        <input
       
          type="password" 
          name='newPassword'
          className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
          placeholder="new-Password"
          // autoComplete='off'
          value={myform.values.newPassword}
          onChange={myform.handleChange}
        />
        
        <p className="text-xs text-[#122D9C]   text-end">
        <Link href={"/ForgetPassword"}>
        Recover Password ?
        </Link>
          
          </p>
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
    </>
  )
}
