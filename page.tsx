"use client"
import Link from "next/link";
import {BASE_API_URL} from '@/global';
import { storeCookie } from "@/lib/client-cookies"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { ToastContainer, toast } from "react-toastify"

type responseLogin = {
  success: boolean
  message: string
  token: string
  role: string
}


const LoginPage = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const router = useRouter()
    
    const handleSubmit = async (e: FormEvent) => {
       try {
           e.preventDefault()
           const url = `${BASE_API_URL}/auth`
           const payload = JSON.stringify({ username, password })
           const response = await axios.post(url, payload, {
               headers: { 
                "Content-Type": "application/json",
                'app-key': '948f791994e92c42a7457f8bd4b6db0e0cf04215',
               },
           })
               const data: responseLogin = response.data
                if (data.success == true) {
                 const role  = data.role
               if (role === `ADMIN`){
                toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, 
                type: "success", autoClose: 2000 })
               storeCookie("token", data.token)
               storeCookie("role", data.role)
               setTimeout(() => router.replace(`/admin/dashboard`),1000)
            } 
            else {
                toast ('anda bukan admin', {hideProgressBar: true, containerId: 
                    `toastLogin`, type: "success", autoClose: 200})
            }
           }
           else toast(data.message, { hideProgressBar: true, containerId: `toastLogin`, type: "warning" })
       } catch (error) {
           console.log(error);
           toast(`Something wrong`, { hideProgressBar: true, containerId: `toastLogin`, type: "error" })
       }
   }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ToastContainer containerId={`toastLogin`} />
        <div className="w-3/6 p-8 bg-white rounded shadow-md">
            <h1 className="text-2xl text-black font-extrabold mb-4">Admin Login</h1>
            <form  onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Username</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="text" id="username" name="username"  onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
                <p className="mt-4 text-black text-center">Doesn't have an account? <Link href="/admin/register" 
                    className="text-emerald-500 hover:underline">Register here</Link></p>
            </form>
        </div>
    </div>
  )
};
export default LoginPage;