'use client'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCatalog } from "@/reducers/catalogReducer";
import { SET_CURRENT_JEWELERY } from "@/reducers/jeweleryReducer";
import { SET_CURRENT_ELECTRONICS } from "@/reducers/electronicsReducer";
import { SET_CURRENT_MAN_CLOTHING } from "@/reducers/manClothingReducer";
import { SET_CURRENT_WOMAN_CLOTHING } from "@/reducers/womanClothingReducer";
import axios from "axios";
import Header from "@/components/view/header/header";
import Footer from "@/components/view/footer/footer";
import PromoSlide from "@/components/promo-slide/promo-slide";
import CatalogItem from "@/components/catalog-item/catalog-item";
import SaleSlide from "@/components/sale-slide/sale-slide";
import MainTitle from "@/components/main-title/main-title";
import { useAppDispatch } from "@/hooks/hooks";
export default function Home() {

  /* const postsUrl = 'https://popov-test-server.onrender.com/api/posts' */
  const dispatch = useAppDispatch()
  const catalog = useSelector((state)=>state.catalog)

  useEffect(()=>{
    if(catalog.status == 'idle'){
      dispatch(fetchCatalog())
    }
  },[])

  useEffect(()=>{
    if(catalog.status == 'idle'){
      let manClothing = []
      let womanClothing = []
      let jewelery = []
      let electronics = []
      catalog.catalog.data.forEach((elem)=>{
          if (elem.category == "men's clothing"){
              manClothing = [...manClothing, elem]
          }else if(elem.category == "women's clothing"){
              womanClothing = [...womanClothing, elem]
          }else if(elem.category == "jewelery"){
              jewelery = [...jewelery, elem]
          }else(
              electronics = [...electronics, elem]
          )
      })
      dispatch(SET_CURRENT_MAN_CLOTHING(manClothing))
      dispatch(SET_CURRENT_WOMAN_CLOTHING(womanClothing))
      dispatch(SET_CURRENT_ELECTRONICS(electronics))
      dispatch(SET_CURRENT_JEWELERY(jewelery))
    }
  },[catalog])

  return (
   <>
    <div>
      <Header/>
      <PromoSlide/>
      <div className="main-wrap">
        <MainTitle title = {'CATALOG'}/>
        <div className="catalog-wripper">
          <div className="catalog-container">
            <CatalogItem catalog_item={catalog.catalog}/>
            <SaleSlide/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   </>
  );
}
