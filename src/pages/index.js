'use client'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchCatalog } from "@/reducers/catalog/catalogReducer";
import { SET_CURRENT_JEWELERY } from "@/reducers/jewelery/jeweleryReducer";
import { SET_CURRENT_ELECTRONICS } from "@/reducers/electronics/electronicsReducer";
import { SET_CURRENT_MAN_CLOTHING } from "@/reducers/manClothing/manClothingReducer";
import { SET_CURRENT_WOMAN_CLOTHING } from "@/reducers/womanClothing/womanClothingReducer";
import { useAppDispatch } from "@/hooks/hooks";
import PromoSlide from "@/components/promo-slide/promo-slide"
import MainTitle from "@/components/main-title/main-title"
import CatalogItem from "@/components/catalog-item/catalog-item"
import SaleSlide from "@/components/sale-slide/sale-slide"
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import BottomNav from "@/components/bottom-nav/bottom-nav";
import { checkMobile, checkMobileListener } from "@/helpers/mobileScripts/ismobile";

export default function Home() {

  const dispatch = useAppDispatch()
  const catalog = useSelector((state)=>state.catalog)
  const mobile = useSelector((state)=>state.mobile.mobile)

  useEffect(()=>{
    checkMobile(dispatch)
    checkMobileListener(dispatch)
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
        <Header/>
        {!mobile?<PromoSlide/>:null}
        <div>
            <MainTitle title = {'CATALOG'} mobile={mobile}/>
            <div className="catalog-wripper">
                <div className="catalog-container">
                    <CatalogItem catalog_item={catalog.catalog}/>
                    {!mobile?<SaleSlide/>:null}
                </div>
            </div>
        </div>
        <Footer/>
        <BottomNav/>
    </>
  );
}
