import { useEffect, useState } from 'react'
import styles from './buy-button.module.scss'
import DoneIcon from '@mui/icons-material/Done'
import { LoadingButton } from '@mui/lab'
import { useSelector } from 'react-redux'
export function BuyButton({id}){
    const [transition, setTransition] = useState(false)
    const [cartCheck, setCartCheck] = useState(false)
    const cart = useSelector((state)=>state.cart.cart)
    useEffect(()=>{
        cart.some(element => element.id == id) ? 
        (setCartCheck(true), setTransition(true))
        : (setCartCheck(true), setTimeout(()=>{setTransition(true)}, 2000))
    },[cart])

    return(
        transition == false && cartCheck == false?
        <LoadingButton loading variant="outlined" size="small" className={styles.loading_btn}>
            Loading
        </LoadingButton>
        :
        <button id={id} className={styles.catalog_item_buy_btn}>
            <DoneIcon id={id} className={styles.done_icon}/>
        </button>
    )
}