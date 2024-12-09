import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { option } from "../api/auth/[...nextauth]/route"



export default async function Home() {
   const session=await getServerSession(option)
   console.log("session",session)
    if(!session){
      redirect('api/auth/signin');
    }
  return (
    <>
    <h1 className="bg-blue-400 py-5 text-center ">Home</h1>
    </>
  )
}
