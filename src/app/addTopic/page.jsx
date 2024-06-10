"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


function AddTopic() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are Required")
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create Topic")
      }

    } catch (error) {
      console.log(error);
    }

  };


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input onChange={(e) => setTitle(e.target.value)}
        value={title}
        className=' border border-amber-400 bg-transparent px-8 py-2'
        type='text'
        placeholder='Topic Title'
      />
      <input onChange={(e) => setDescription(e.target.value)}
        value={description}
        className=' border border-amber-400 bg-transparent px-8 py-2'
        type='text'
        placeholder='Topic Description'
      />

      <button typeof='submit' className=' px-6 py-3 font-bold text-white w-fit bg-orange-600'>
        Add Topic</button>

    </form>
  )
}

export default AddTopic