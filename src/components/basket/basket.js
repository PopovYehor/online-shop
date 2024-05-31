import { useSelector } from "react-redux"
import styles from "./basket.module.scss"
import { useState, useEffect } from "react"
import BasketItem from "./basket-item/basket-item"
import Link from "next/link"
import { Button } from "@mui/material"
import DeliveryData from "./basket-item/delivery-data/delivery-data"
import BuyerData from "./basket-item/buyer-data/buyer-data"
import PaymentData from "./payment-data/payment-data"
import OrderButton from "./order-button/order-button"

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
        <div className={styles.basket_wrap}>
            <div className={styles.basket_items_wrap}>
                <div className={styles.basket_container}>
                    {cart.length > 0 ? 
                        <>
                        <BasketItem/> 
                        <div className={styles.result_price}>
                            <h3 className={styles.result_price_text}>Total: <span className={styles.result_price_item}>{sum} $</span></h3>
                        </div>
                        </>
                        :
                        <div className={styles.empty_cart}>
                            <div><span className={styles.empty_cart_text}>CART IS AMPTY</span></div>
                            <Button variant="contained" size="large" className={styles.empty_cart_link}><Link href={'/'}>Continue shopping </Link></Button>
                        </div>}
                </div>
            </div>
            {cart.length > 0 ?
            <>
            <BuyerData/>
            <DeliveryData/>
            <PaymentData/>
            <OrderButton/>
            </>
            : null
            }
        </div>
        </>
    )
}