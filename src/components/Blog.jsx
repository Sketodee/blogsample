import React from 'react'
import postlist from "../posts.json"

const Blog = () => {
    console.log(postlist)
  return (
    postlist.map((post, index) => {
        return (
            <div key={post.id}> 
                <h2> {post.title} </h2>
                <p> published by {post.author} on {post.date} </p>
                <img src={post.thumbnail} alt=""/>
            </div>
        )
    })
  )
}

export default Blog