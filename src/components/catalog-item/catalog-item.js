import styles from "./catalog-item.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { AddToBasket } from "@/helpers/cartScripts";
import { useState } from "react";
import {BuyButton} from "./buy-button/buy-button";
export default function CatalogItem ({catalog_item}){

    const dispatch = useAppDispatch()
    const catalog = useSelector((state)=>state.catalog.catalog)
    const cart = useSelector((state)=>state.cart.cart)

    /* useEffect(()=>{
        cart.some(element => element.id == catalog_item.data.id) ?
            (setTransition(true), setCartCheck(true))
            : (setTransition(false), setCartCheck(false))
    },[catalog_item]) */

    /* const handleCartChange = (event)=>{
        const targetId = event.target.id
        let id = ''
        targetId == '' ? id= event.target.parentNode.id : id = targetId
        let cartCheck = cart.some(elem => elem.id == id)
        if (!cartCheck){
            catalog.data.forEach(elem => {
                elem.id == id ? dispatch(SET_CURRENT_CART(elem)) : null
            })
        }
    } */

return(
    <>  
        <div className={styles.catalog_container}>
            {catalog_item.data.map((elem)=>{
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
                                {
                                cart.some(element => element.id == elem.id) ?
                                    <BuyButton id={elem.id}/>
                                : <button id={elem.id}
                                    className={styles.catalog_item_buy_btn}
                                    onClick={(e)=>{AddToBasket(e, cart, catalog, dispatch)}}>
                                    <FontAwesomeIcon id={elem.id} icon={ faBasketShopping}/>
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}