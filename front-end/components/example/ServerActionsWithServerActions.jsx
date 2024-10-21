"use client"

import {useState,useTransition} from 'react'
import { requestPassword } from '@/lib/actions'
export const ServerActionsWithServerActions=()=>{
    
    const [name,setName]=useState('')
    const [error,setError]=useState(null)
    const [isPending,startTransition]=useTransition()
    const submitAction=async()=>{
        startTransition(async()=>{
            const {success}=await requestPassword(name)
            if(success){
                setName('')
                alert('Name added')
            }
            else{
                setError('Name not added')
            }
        })
    }
    return (
        <form action={()=>{
            submitAction(name)
        }}>
            <input className='ring-1' type="text" name='name' value={name} disabled={isPending} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            {error && <span>Failed: {error}</span>}
            <button type='submit'  className="btn">Add</button>
        </form>
    )
}