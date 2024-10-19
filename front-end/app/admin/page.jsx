"use client"
import { useState} from "react"
import { requestPassword } from "@/lib/actions"
export default function Page(){
    const [password,setPassword]=useState('')

    return (
        <form action={requestPassword}>
            <input type="text" placeholder={password} name="password" className="ring-1" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button className="btn" type="submit" onClick={()=>{
                setPassword('')
            }}>Submit</button>

        </form>
    )
}