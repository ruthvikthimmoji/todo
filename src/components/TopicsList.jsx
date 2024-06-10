"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"


function TopicsList() {
  const router = useRouter();

  const handleRemove = (id) => {
    setTopics(topics.filter(topic => topic.id !== id));
  };

  const [topics, setTopics] = useState([]);
  useEffect(() => {
    async function getTopics() {
      try {
        const res = await fetch("http://localhost:3000/api/topics", {
          cache: "no-store"
        });
        if (!res.ok) {
          throw new Error("fail to fetch");
        }
        const data = await res.json();
        setTopics(data.topics);
      } catch (error) {
        console.log("Error loading the data:", error);
      }
    }
    getTopics();
  }, [router.asPath])
  return (
    <>
      {topics.map(topic => (
        <div key={topic._id}
          className='p-4 border border-amber-400 flex justify-between  my-3 gap-5 items-start'>
          <div>
            <h2 className='font-bold  text-2xl'>{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className='flex gap-2'>
            <RemoveBtn id={topic._id} onRemove={handleRemove} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default TopicsList