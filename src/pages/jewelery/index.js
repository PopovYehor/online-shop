import { useSelector } from "react-redux"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import PromoSlide from "@/components/promo-slide/promo-slide";
import CatalogItem from "@/components/catalog-item/catalog-item";
import SaleSlide from "@/components/sale-slide/sale-slide";
import MainTitle from "@/components/main-title/main-title";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { fetchCatalog } from "@/reducers/catalog/catalogReducer";
import { SET_CURRENT_JEWELERY } from "@/reducers/jewelery/jeweleryReducer";
import CatalogView from "@/view/catalog-view/catalog-view";
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
            dispatch(SET_CURRENT_JEWELERY(jewelery))
        }
    },[catalog])
    return(
        <CatalogView catalog_title={'JEWELERY'} item={jewelery.jewelery}></CatalogView>
    )
}