"use client";
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

function RemoveBtn({ id ,onRemove }) {
  const router = useRouter('');
  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?')

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        cache: "no-store",
        method: "DELETE",
      });

      if (res.ok) {
        onRemove(id);
      }

    }

  }



  return (
    <button onClick={removeTopic} className='text-red-400'>
      <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn