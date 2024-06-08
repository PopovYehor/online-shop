import styles from "./catalog-item.module.scss"
import Link from "next/link";
import {BuyButton} from "./buy-button/buy-button";
import { useAppDispatch } from "@/hooks/hooks";
import { SET_SELECTED_PRODUCT } from "@/reducers/catalog/catalogReducer";
export default function CatalogItem ({catalog_item}){
    const dispatch = useAppDispatch()

    const setProductItem = (id)=>{
        catalog_item.data.forEach((elem)=>elem.id == id ? dispatch(SET_SELECTED_PRODUCT(elem)) : null)
    }

return(
    <>  
        <div className={styles.catalog_container}>
            {catalog_item.data.map((elem)=>{
                return (
                    <div  className={styles.catalog_item} >
                        <div className={styles.catalog_item_img}>
                        <Link href={`/product/${elem.id}`} onClick={()=>setProductItem(elem.id)}><img src={elem.image} id={elem.id}/></Link>
                        </div>
                        <div className={styles.catalog_item_descriptions}>
                            <div className={styles.catalog_item_description}>
                            <Link  d={elem.id}  href={`/product/${elem.id}`} className={styles.catalog_item_name} onClick={()=>setProductItem(elem.id)}>{elem.title}</Link>
                                <span className={styles.catalog_item_price}>{elem.price} $</span>
                            </div>
                            <div className={styles.catalog_item_buy} id={elem.id}>
                                <BuyButton id={elem.id}/>   
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}