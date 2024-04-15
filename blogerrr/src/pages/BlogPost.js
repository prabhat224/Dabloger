import React from 'react'

const BlogPost = () => {
  return (
    <div className=' bg-gray-800 h-auto p-5  text-white'>
      <div className='content  mx-20 mt-5'>
        <div className='title text-4xl font-sans font-bold italic'>This is title</div>
        <div className='details pl-10 text-xl mt-10 text-left '>These are details</div>
      </div>
      <div className='image '>
        <img src='https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-5/6 m-auto mt-20 h-96'/>
      </div>
    </div>
  )
}

export default BlogPost
