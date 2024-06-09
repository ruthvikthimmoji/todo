import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"


const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error("fail to fetch");

    }
    return res.json()
  } catch (error) {
    console.log("Error loading the data:", error);

  }

}


async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map(t => (
        <div className='p-4 border border-amber-400 flex justify-between  my-3 gap-5 items-start'>
          <div>
            <h2 className='font-bold  text-2xl'>{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className='flex gap-2'>
            <RemoveBtn id = {t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>

          </div>

        </div>
      ))}
    </>
  )
}

export default TopicsList