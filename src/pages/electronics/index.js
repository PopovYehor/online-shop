import { useSelector } from "react-redux"
import CatalogView from "@/view/catalog-view/catalog-view";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { fetchCatalog } from "@/reducers/catalog/catalogReducer";
import { SET_CURRENT_ELECTRONICS } from "@/reducers/electronics/electronicsReducer";
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
        <CatalogView catalog_title={'ELECTRONICS'} item={electronics.electronics}></CatalogView>
    )
}