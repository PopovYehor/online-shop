import CatalogView from "@/components/view/catalog-view/catalog-view";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { fetchCatalog } from "@/reducers/catalogReducer";
import { useEffect } from "react";
import { SET_CURRENT_WOMAN_CLOTHING } from "@/reducers/womanClothingReducer";
export default function WomanClothing(){
    const dispatch = useAppDispatch()
    const womanClothing = useSelector((state)=>state.womanClothing)
    const catalog = useSelector((state)=>state.catalog)

    useEffect(()=>{
        
        if (womanClothing.status == 'idle'){
            dispatch(fetchCatalog())
        }
    },[])
    useEffect(()=>{
        if(catalog.status == 'succeeded' && womanClothing.status == 'idle'){
            let womanClothing = []
            catalog.catalog.data.forEach((elem)=>{
                elem.category == "women's clothing" ? womanClothing = [...womanClothing, elem] : null
            })
            dispatch(SET_CURRENT_WOMAN_CLOTHING(womanClothing))
        }
    },[catalog])
    return(
        <CatalogView catalog_title={'WOMAN CLOTHING'} item={womanClothing.womanClothing}/>
    )
}