import { useEffect, useState } from 'react'
import styles from './buy-button.module.scss'
import DoneIcon from '@mui/icons-material/Done'
import { LoadingButton } from '@mui/lab'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/hooks/hooks'
import { AddToBasket } from '@/helpers/cartScripts'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material'
import { emptyOrder } from '@/constants/order'
import { SET_CURRENT_ORDER, SET_CURRENT_ORDER_ERROR, SET_CURRENT_ORDER_STATUS } from '@/reducers/order/orderDataReducer'

export function BuyButton({id}){
    const [transition, setTransition] = useState(false)
    const order = useSelector((state)=>state.order)
    const cart = useSelector((state)=>state.cart.cart)
    const catalog = useSelector((state)=>state.catalog.catalog)
    const dispatch = useAppDispatch()

    const setTransitions = (e)=>{
        setTransition(true)
        setTimeout(()=>{
            AddToBasket(e,cart, catalog, dispatch)
        }, 500)
    }
    //check empty order
    useEffect(()=>{
        if(order.status != 'idle'){
            dispatch(SET_CURRENT_ORDER(emptyOrder))
            dispatch(SET_CURRENT_ORDER_STATUS('idle'))
            dispatch(SET_CURRENT_ORDER_ERROR(null))
        }
    },[cart])

    return(
        <>
            {
                cart.some((element)=>element.id == id) ?
                    <button id={id} className={styles.catalog_item_buy_btn}>
                        <DoneIcon id={id} className={styles.done_icon}/>
                    </button>
                : transition == true ?
                <LoadingButton loading variant="outlined" size="small" className={styles.loading_btn}>
                    Loading
                </LoadingButton>
                :
                <Button variant="contained" size='small'
                id={id}
                className={`${styles.catalog_item_buy_btn} ${styles.buyActive}`} 
                onClick={(e)=>{setTransitions(e)}}>
                    <ShoppingCartIcon id={id}/>
                </Button>
            }
        </>
    )
}