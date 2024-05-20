'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/view/header/header";
import Footer from "@/components/view/footer/footer";
import PromoSlide from "@/components/promo-slide/promo-slide";
import CatalogItem from "@/components/catalog-item/catalog-item";
import SaleSlide from "@/components/sale-slide/sale-slide";

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
      <div className="catalog-wripper">
        <div className="catalog-container">
          <CatalogItem/>
          <SaleSlide/>
        </div>
      </div>
      <Footer/>
    </div>
   </>
  );
}