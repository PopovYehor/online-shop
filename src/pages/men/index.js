import CatalogView from "@/components/view/catalog-view/catalog-view";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { fetchCatalog } from "@/reducers/catalogReducer";
import { SET_CURRENT_MAN_CLOTHING } from "@/reducers/manClothingReducer";
import { useEffect } from "react";
export default function ManClothing(){
    const dispatch = useAppDispatch()
    const manClothing = useSelector((state)=>state.manClothing)
    const catalog = useSelector((state)=>state.catalog)

    useEffect(()=>{
        
        if (manClothing.status == 'idle'){
            dispatch(fetchCatalog())
        }
    },[])
    useEffect(()=>{
        if(catalog.status == 'succeeded' && manClothing.status == 'idle'){
            let manClothing = []
            catalog.catalog.data.forEach((elem)=>{
                elem.category == "men's clothing" ? manClothing = [...manClothing, elem] : null
            })
            dispatch(SET_CURRENT_MAN_CLOTHING(manClothing))
        }
    },[catalog])
    return(
        <CatalogView catalog_title={'MAN CLOTHING'} item={manClothing.manClothing}/>
    )
}