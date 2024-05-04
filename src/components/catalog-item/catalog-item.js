import styles from "./catalog-item.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "@/reducers/catalogReducer";
import { store } from "@/store/store";

export default function CatalogItem (){

    const dispatch = useAppDispatch()
    const catalog = store.getState().catalog.catalog

    useEffect(()=>{
        dispatch(fetchCatalog())
        console.log(catalog)
    },[catalog])

return(
    <>  
        {catalog.data.map((elem)=>{
            return(
                <>
                <p>{elem.title}</p>
                </>
            )
        })}
        {/* <div className={styles.catalog_container}>
            {dataProduct.map((elem)=>{
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
        </div> */}
    </>
    )
}