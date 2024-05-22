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
import { SET_CURRENT_JEWELERY } from "@/reducers/jeweleryReducer";
export default function Electronics(){
    const dispatch = useAppDispatch()
    const jewelery = useSelector((state)=>state.jewelery)
    const catalog = useSelector((state)=>state.catalog)

    useEffect(()=>{
        if (jewelery.status == 'idle'){
            dispatch(fetchCatalog())
        }
    },[])
    useEffect(()=>{
        if(catalog.status == 'succeeded'){
            let jewelery = []
            catalog.catalog.data.forEach((elem)=>{
                elem.category == "jewelery" ? jewelery = [...jewelery, elem] : null
            })
            console.log('jewelery', jewelery)
            dispatch(SET_CURRENT_JEWELERY(jewelery))
        }
    },[catalog])
    return(
        <>
        <Header/>
        <PromoSlide/>
        <div className="main-wrap">
            <MainTitle title = {'JEWELERY'}/>
            <div className="catalog-wripper">
                <div className="catalog-container">
                    <CatalogItem catalog_item={jewelery.jewelery}/>
                    <SaleSlide/>
                </div>
            </div>
        </div>
        <Footer/>
   </>
    )
}