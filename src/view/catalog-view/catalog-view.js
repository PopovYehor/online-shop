import Header from "../../components/header/header"
import PromoSlide from "@/components/promo-slide/promo-slide"
import MainTitle from "@/components/main-title/main-title"
import CatalogItem from "@/components/catalog-item/catalog-item"
import SaleSlide from "@/components/sale-slide/sale-slide"
import Footer from "../../components/footer/footer"
import { useState, useEffect } from "react"
import BottomNav from "@/components/bottom-nav/bottom-nav"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks/hooks"
import { checkMobile, checkMobileListener } from "@/helpers/mobileScripts/ismobile"

export default function CatalogView({catalog_title, item}){
    const mobile = useSelector((state)=>state.mobile.mobile)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        checkMobile(dispatch)
        checkMobileListener(dispatch)
    }, [])
    return(
        <> 
        <Header/>
        {!mobile?<PromoSlide/>:null}
        <div>
            <MainTitle title = {catalog_title} mobile={mobile}/>
            <div className="catalog-wripper">
                <div className="catalog-container">
                    <CatalogItem catalog_item={item}/>
                    {!mobile?<SaleSlide/>:null}
                </div>
            </div>
        </div>
        <Footer/>
        <BottomNav/>
        </>
    )
}