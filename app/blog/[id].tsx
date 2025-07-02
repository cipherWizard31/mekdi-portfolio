// pages/blog/[id].tsx
import React from 'react'
import { useRouter } from 'next/router'

const BlogPost: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h1>Blog Post</h1>
      <p>Post ID: {id}</p>
    </>
  )
}

export default BlogPost
