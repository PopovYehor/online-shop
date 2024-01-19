'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const postsUrl = 'https://popov-test-server.onrender.com/api/posts'

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    axios.get(postsUrl).then((res)=>{
      const {data} = res
      setPosts(data)
    })
  },[])

  return (
   <>
    <div>
      {posts.map((post)=>{
        return(
          <p key={post._id}>{post.author}</p>
        )
      })}
    </div>
   </>
  );
}
