import { useAppDispatch } from "@/hooks/hooks"
import { SET_CHANGE_CART } from "@/reducers/cart/cartReducer"
import { useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./basket-item.module.scss"
import Link from "next/link";
import CountButtons from "./count-buttons/count-buttons";
import { useState, useEffect } from "react";
import { checkMobile, checkMobileListener } from "@/helpers/mobileScripts/ismobile";
export default function BasketItem(){

    const cart = useSelector((state)=>state.cart.cart)
    const mobile = useSelector((state)=>state.mobile.mobile)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        checkMobile(dispatch)
        checkMobileListener(dispatch)
    }, [])

    const deleteFromBasket = (e)=>{
        const target = e.target
        const targetId = target.getAttribute('id') || target.parentNode.getAttribute('id')
        const change = cart.filter(elem => elem.id != targetId)
        dispatch(SET_CHANGE_CART(change))
    }

    return(
        <>
        {cart.map((elem)=>{
            return(
            <div className={styles.basket_item}>
                <div className={styles.item_img}>
                <Link href={`/product/${elem.id}`}><img src={elem.image} id = {elem.id}></img></Link>
                </div>
                <div className={styles.item_title}>
                    <h3 className={styles.title_item}>{elem.title}</h3>
                    {!mobile? <p className={styles.item_description}>{elem.description}</p> :null}
                    <div className={styles.basket_price}>          
                        <span className={styles.price}>{elem.summPrice} $</span>
                    </div>
                </div>
                <div className={styles.item_buttons_wrap}>
                    <CountButtons cartItem={elem}/>
                    <div className={styles.delete_from_basket}>
                        <button className={styles.delete_from_basket_btn} id={elem.id} onClick={(e)=>deleteFromBasket(e)}><DeleteIcon id={elem.id}/></button>
                    </div>
                </div>
            </div>
            )
        })}
        </>
    )
}