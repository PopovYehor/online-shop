'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./view/header/header";
import Footer from "./view/footer/footer";
import PromoSlide from "./components/promo-slide/promo-slide";
export default function Home() {

  /* const postsUrl = 'https://popov-test-server.onrender.com/api/posts' */

  const [posts, setPosts] = useState([])

  /* useEffect(()=>{
    axios.get(postsUrl).then((res)=>{
      const {data} = res
      setPosts(data)
    })
  },[]) */

  return (
   <>
    <div>
      <Header/>
      <PromoSlide/>
      <Footer/>
    </div>
   </>
  );
}
