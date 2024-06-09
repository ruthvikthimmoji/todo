import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-amber-400 px-8 py-4'>
        <Link href={'/'} className='font-extrabold ' >
            Todo</Link>
        <Link href = {'/addTopic'} className=''>
            AddTopic</Link>
    </nav>
  )
}

export default Navbar