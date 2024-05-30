import { useState } from "react";
import styles from "./count-buttons.module.scss"
import { Button } from "@mui/material";
import { SET_CURRENT_COUNT, SET_CURRENT_PRICE } from "@/reducers/cart/cartReducer";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/hooks";
export default function CountButtons({cartItem}){
    /* const [count, setCount] = useState(1) */
    
    const dispatch = useAppDispatch()
    const cart = useSelector((state)=>state.cart.cart)
    const index = cart.findIndex(elem => elem.id ==cartItem.id)
    const {count} = cart[index]
    const {price} = cart[index]

    const handleCount = (e)=>{
        const target = e.target
        const name = target.name
        if (name == 'cart-count-minus'){
            if(count>1){
                dispatch(SET_CURRENT_COUNT({index: index, count: count-1}))
                dispatch(SET_CURRENT_PRICE({index: index, price: price*(count-1)}))
            }
        }
        if(name == 'cart-count-plus'){
            dispatch(SET_CURRENT_COUNT({index: index, count: count+1}))
            dispatch(SET_CURRENT_PRICE({index: index, price: price*(count+1)}))
        }
    }
    return(
        <>
        <div className={styles.count_item}>
            <Button className={styles.count_item_btn} id={cartItem.id} name="cart-count-minus" variant="outlined" size="small" onClick={(e)=>handleCount(e)}>-</Button>
                <span>{/* cart.count */count}</span>
            <Button className={styles.count_item_btn} id={cartItem.id} name="cart-count-plus" variant="outlined" size="small" onClick={(e)=>handleCount(e)}>+</Button>
        </div>
        </>
    )
}