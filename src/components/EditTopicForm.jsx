"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function EditTopicForm  ({id,title,description})  {

const [newTitle,setNewTitle] = useState(title);
const [newDescription,setNewDescription] = useState(description);
const router = useRouter();


const handleSubmit= async(e) =>{
  e.preventDefault();
  try {
    const res= await fetch(`http://localhost:3000/api/topics/${id}`,{
      method:"PUT",
      headers:{
       "Content-type":"application/json",
      },
      body:JSON.stringify({newTitle, newDescription}),
    })
    if(!res.ok){
      throw new Error("failed to update");
    }
    router.push('/');
    router.refresh();
  } catch (error) {
    console.log(error);
  }
  
}
  return (
    <form onSubmit={handleSubmit}
    className='flex flex-col gap-3'>
        <input onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
         className=' border border-amber-400 bg-transparent px-8 py-2'
        type='text'
        placeholder='Topic Title'
        /> 
        <input onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
         className=' border border-amber-400 bg-transparent px-8 py-2'
        type='text'
        placeholder='Topic Description'
        />

        <button className=' px-6 py-3 font-bold text-white w-fit bg-orange-600'>
             Update Topic</button>

    </form>
  )
}

export default EditTopicForm