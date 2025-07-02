import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-screen bg-blue-400 h-36 py-12 space-x-4 pl-7'>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>CV</Link>
        <Link href={"#"}>Gallery</Link>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Contact</Link>
    </div>
  )
}

export default Footer