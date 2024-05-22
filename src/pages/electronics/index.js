import { useSelector } from "react-redux"
import Header from "@/components/view/header/header";
import Footer from "@/components/view/footer/footer";
import PromoSlide from "@/components/promo-slide/promo-slide";
import CatalogItem from "@/components/catalog-item/catalog-item";
import SaleSlide from "@/components/sale-slide/sale-slide";
import MainTitle from "@/components/main-title/main-title";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { fetchCatalog } from "@/reducers/catalogReducer";
import { SET_CURRENT_ELECTRONICS } from "@/reducers/electronicsReducer";
export default function Electronics(){
    const dispatch = useAppDispatch()
    const electronics = useSelector((state)=>state.electronics)
    const catalog = useSelector((state)=>state.catalog.catalog)

    useEffect(()=>{
        if (electronics.status == 'idle'){
            dispatch(fetchCatalog())
        }
    },[])
    useEffect(()=>{
            let electronics = []
            catalog.data.forEach((elem)=>{
                elem.category == "electronics" ? electronics = [...electronics, elem] : null
            })
            dispatch(SET_CURRENT_ELECTRONICS(electronics))
    },[catalog])
    return(
        <>
        <Header/>
        <PromoSlide/>
        <div className="main-wrap">
            <MainTitle title = {'ELECTRONICS'}/>
            <div className="catalog-wripper">
                <div className="catalog-container">
                    <CatalogItem catalog_item={electronics.electronics}/>
                    <SaleSlide/>
                </div>
            </div>
        </div>
        <Footer/>
   </>
    )
}