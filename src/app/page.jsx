import Image from "next/image";
import Home from "./Home/page";
import Login from "./login/page";
import { redirect } from "next/navigation";

export default function live() {
  redirect("/login")
  return (
    <>
   {/* <Login/> */}
    </>
  );
}
