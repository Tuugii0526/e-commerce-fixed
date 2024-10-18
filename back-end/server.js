import express from "express";
import dotenv from 'dotenv'
import {neon} from '@neondatabase/serverless'
dotenv.config()
const port=8888
const app=express()
app.use(express.json())
const sql=neon(`${process.env.DATABASE_URL}`)
app.get('/',(req,res)=>{
    res.json({
        greeting:"Hello chapa"
    }
    )
})
app.get('/products',async(req,res)=>{
    let products
   try {
    products=await sql`SELECT * 
        FROM products ORDER BY name ASC`
   } catch (error) {
    res.send([])
   }
   res.send(products)
})
app.get('/products/:id',async (req,res)=>{
    const id=req.params.id
    let product
    try {
        product=await sql`SELECT * FROM products 
        WHERE id=${id}`
    } catch (error) {
        res.send([])
    }
    res.send(product)
})
app.post('/cart')
app.listen(port,()=>{
        console.log(`server started working at : http://localhost:${port}`)
    
    })