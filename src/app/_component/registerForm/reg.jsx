"use client";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as yup from "yup";

export default function Regform() {
  let router = useRouter();

  let valisationschema = yup.object({
    username: yup
      .string()
      .min(3, "the user name must contain at least 3 charcter")
      .required("the user name is required"),
    firstName: yup
      .string()
      .min(3, "the user name must contain at least 3 charcter")
      .required("the user name is required"),
    lastName: yup
      .string()
      .min(3, "the user name must contain at least 3 charcter")
      .required("the user name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "invalid password"
      )
      .required("password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "password is not the same")
      .required("repassword is required"),
    phone: yup
      .string()
      .matches(/^01[0125][0-9]{8}$/, "invalid phone")
      .required("phone required"),
  });

  async function handleRegister(objectofApi) {
    console.log(objectofApi);
    let { data } = await axios.post(
      "https://exam.elevateegy.com/api/v1/auth/signup",
      objectofApi
    );
    if (data.message == "success") {
      console.log("yes");
      router.push("/login");
    }
  }
  let myform = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: valisationschema,
    onSubmit: handleRegister,
  });
  return (
    <>
      <div className=" flex flex-col gap-8 justify-center items-center h-full ">
        <form
          onSubmit={myform.handleSubmit}
          className="  w-[35%] flex flex-col gap-6  "
        >
          <p className="font-semibold text-lg">Sign Up</p>

          <input
            type="text"
            
            className= " w-full  shadow-lg border-2 p-2   rounded-lg focus-visible:out"
            placeholder="username"
            name="username"
            id="username"
            value={myform.values.username}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />
          {myform.errors.username && myform.touched.username ? (
            <span className=" text-red-700 text-xs">{myform.errors.username}</span>
          ) : null}

          <input
            type="text"
            className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
            placeholder="First Name"
            name="firstName"
            id="firstName"
            value={myform.values.firstName}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />
          {myform.errors.firstName && myform.touched.firstName ? (
            <span className=" text-red-700 text-xs">{myform.errors.firstName}</span>
          ) : null}

          <input
            type="text"
            className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            value={myform.values.lastName}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />
          {myform.errors.lastName && myform.touched.lastName ? (
            <span className=" text-red-700 text-xs">{myform.errors.lastName}</span>
          ) : null}

          <input
            type="email"
            className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
            placeholder="Email"
            name="email"
            id="email"
            value={myform.values.email}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />

          {myform.errors.email && myform.touched.email ? (
            <span className=" text-red-700 text-xs">{myform.errors.email}</span>
          ) : null}

          <input
            type="password"
            className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
            placeholder="Password"
            name="password"
            id="password"
            value={myform.values.password}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />
          {myform.errors.password&&myform.touched.password?<span className=' text-red-700 text-xs'>{myform.errors.password}</span>:null}


          <input
            type="password"
            className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
            placeholder="confirm Password"
            name="rePassword"
            id="rePassword"
            value={myform.values.rePassword}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />
          {myform.errors.rePassword&&myform.touched.rePassword?<span className=' text-red-700'>{myform.errors.rePassword}</span>:null}

          <input
            type="tel"
            className="w-full shadow-lg border-2 p-2 rounded-lg focus-visible:out"
            placeholder="confirm Password"
            name="phone"
            id="phone"
            value={myform.values.phone}
            onChange={myform.handleChange}
            onBlur={myform.handleBlur}
          />
          {myform.errors.phone&&myform.touched.phone?<span className=' text-red-700 text-xs'>{myform.errors.phone}</span>:null}

          <p className="text-sm text-center tracking-widest">
            Already have an account?{" "}
            <span className="text-[#4461F2] "> Login </span>
          </p>
          <button
            type="submit"
            className="bg-[#4461F2] text-white font-light text-sm w-full p-3 rounded-2xl"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
