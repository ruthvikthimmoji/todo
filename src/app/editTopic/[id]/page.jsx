import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'


const getTopicsById = async(id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`);

    if(!res.ok){
      throw new Error("failed to fetch topic");
    }
    return res.json();
    
  } catch (error) {
    console.log(error);
    
  }
}


async function EditTopic ( {params}) {
  const { id } = params;
  const {topic} = await getTopicsById(id);
  const {title,description} = topic;
  return (

    <EditTopicForm id={id} title={title} description={description} />
  )
}

export default EditTopic