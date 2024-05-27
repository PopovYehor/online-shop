import { useSelector } from "react-redux"
import styles from "./basket.module.scss"
import { useState, useEffect } from "react"
import BasketItem from "./basket-item/basket-item"
import Link from "next/link"
import { Button } from "@mui/material"

export default function Basket(){
    const cart = useSelector((state)=>state.cart.cart)
    const [sum, setSum] = useState('')
    useEffect(()=>{
        setSum(()=>{
            return(
                cart.reduce((accumulator, object) => {
                    return (accumulator + object.summPrice)
                  }, 0)
            )
        })
    }, [cart])
    return(
        <>
        <div className={styles.basket_items_wrap}>
            <div className={styles.basket_container}>
                {cart.length > 0 ? 
                    <>
                    <BasketItem/> 
                    <div className={styles.result_price}>
                        <button className={styles.add_to_basket}>To order</button>
                        <p className={styles.result_price_text}>Total: <span className={styles.result_price_item}>{sum} $</span></p>
                    </div>
                    </>
                    :
                    <div className={styles.empty_cart}>
                        <div><span className={styles.empty_cart_text}>CART IS AMPTY</span></div>
                        <Button variant="contained" size="large" className={styles.empty_cart_link}><Link href={'/'}>Continue shopping </Link></Button>
                    </div>}
                
            </div>
        </div>
        </>
    )
}