import styles from "./catalog-item.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { fetchCatalog } from "@/reducers/catalogReducer";

export default function CatalogItem (){

    const dispatch = useAppDispatch()
    const catalog = useSelector((state)=>state.catalog.catalog)

    useEffect(()=>{
        dispatch(fetchCatalog())
    },[]) 

return(
    <>  
        <div className={styles.catalog_container}>
            {catalog.data.map((elem)=>{
                return (
                    <div  className={styles.catalog_item} >
                        <div className={styles.catalog_item_img}>
                        <Link href={`/product/${elem.id}`}><img src={elem.image} id={elem.id}/></Link>
                        </div>
                        <div className={styles.catalog_item_descriptions}>
                            <div className={styles.catalog_item_description}>
                            <Link  d={elem.id}  href={`/product/${elem.id}`} className={styles.catalog_item_name}>{elem.title}</Link>
                                <span className={styles.catalog_item_price}>{elem.price} $</span>
                            </div>
                            <div className={styles.catalog_item_buy} id={elem.id}>
                                <button id={elem.id} className={styles.catalog_item_buy_btn}><FontAwesomeIcon id={elem.id} icon={ faBasketShopping} /></button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}