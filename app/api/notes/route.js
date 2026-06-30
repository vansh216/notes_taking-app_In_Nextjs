"use server"

import { NextResponse } from "next/server"

export async function GET(request) {
    const notes= await Note.find({})
    return new NextResponse(JSON.stringify(notes))
}
 export async function POST(request) {
    const data=await request.json()
    if(!data.title || !data.content) return  NextResponse.json({success:false,message:"data is required"})

    console.log(data)
    return NextResponse.json({success:true,message:"note created successfully",data:data})
    
}