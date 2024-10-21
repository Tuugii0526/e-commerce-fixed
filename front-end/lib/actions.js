"use server"
import {neon} from '@neondatabase/serverless'
const sql=neon(process.env.DATABASE_URL)
export const fetchProducts=async()=>{
const products=await sql`SELECT * FROM products`
return products
}
export const fetchCustomers=async ()=>{
try {
    const customers=await sql `SELECT * FROM  customers`
    return {success:true,customers:customers}
} catch (error) {
    return {success:false}
}    
}


export async function requestPassword(name){
    if(!name){
        return {error:'Name is required'}
    }
    try {
        await sql`
    INSERT INTO test(password)
    VALUES(${name})
    `
    return {success:true}
    }
     catch (error) {
        return {success:false}
    }
}