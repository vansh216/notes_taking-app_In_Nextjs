"use client"
import All_Notes from '@/app/components/All_Notes'
import React from 'react'

const Home = () => {

  const handleCreateNote=async(e)=>{
    e.preventDefault()
    const title= e.target.title.value
    const content= e.target.content.value
    console.log(title,content)
    const res= await fetch('/api/notes',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title,content})
    })
    const data= await res.json()
    console.log(data)

    
  }
  return (
    <div className='mt-10'>
      <div className='flex flex-col items-center '>
          <form onSubmit={(e)=>handleCreateNote(e)}   className='flex py-4 gap-4 flex-col px-4 border-2 border-gray-300 rounded-lg shadow-md  w-full mb-4'>
        

          <input type='text' className='w-full px-4'  name='title' placeholder='Note Title' />
          <input type='text' className='w-full px-4' name='content' placeholder='Note Content' />
          <button type='submit' className='border-2 border-gray-50 rounded-md max-w-50 hover:scale-105 hover:text-blue-500 font-semibold hover:bg-amber-300 transition-all duration-350 bg-sky-500 px-4 py-2'>Save Note </button>

       
          </form>
        <div className=' px-4 border-2 border-gray-300 rounded-lg shadow-md  w-full mb-4'>
          <All_Notes/>
        </div>
      </div>
    </div>
  )
}

export default Home
