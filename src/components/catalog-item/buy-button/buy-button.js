import { useState } from 'react'
import styles from './buy-button.module.scss'
import DoneIcon from '@mui/icons-material/Done'
import { LoadingButton } from '@mui/lab'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/hooks/hooks'
import { AddToBasket } from '@/helpers/cartScripts'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material'

export function BuyButton({id}){
    const [transition, setTransition] = useState(false)
    
    const cart = useSelector((state)=>state.cart.cart)
    const catalog = useSelector((state)=>state.catalog.catalog)
    const dispatch = useAppDispatch()

    const setTransitions = (e)=>{
        setTransition(true)
        setTimeout(()=>{
            AddToBasket(e,cart, catalog, dispatch)
        }, 1000)
    }

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