import React from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom';

const BlogGrid = () => {
  const blogCards = [];
  for (let i = 0; i < 20; i++) {
    blogCards.push(<BlogCard key={i} />);
  }
  return (
    <div className="ml-64 grid grid-cols-1 md:grid-cols-3 gap-3 m-3 ">
    <Link to='/blogpost'>
    {blogCards}
    </Link>
    </div>
  )
}

export default BlogGrid
