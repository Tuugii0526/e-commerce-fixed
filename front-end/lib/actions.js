"use server"
import {neon} from '@neondatabase/serverless'
const sql=neon(process.env.DATABASE_URL)
export const fetchProducts=async()=>{
const products=await sql`SELECT * FROM products`
return products
}
export const fetchCustomers=async ()=>{
    const customers=await sql `SELECT * FROM  customers`
    return customers
}
export async function requestPassword(formData){
    const reg=/^[^_][^\s]{3,}/
    const password=formData.get('password')
    console.log('password is:',password)
    if(!password)
    {
        return null
    }
    if(!reg.test(password))
    {
        return null
    }
    try {
        await sql`
    INSERT INTO test(password)
    VALUES(${password})
    `
    return {status:"success"}
    } catch (error) {
        return null
    }
    }