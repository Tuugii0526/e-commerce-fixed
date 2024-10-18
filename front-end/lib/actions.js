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