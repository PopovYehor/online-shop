import { useEffect, useState } from 'react'
import styles from './buy-button.module.scss'
import DoneIcon from '@mui/icons-material/Done'
import { LoadingButton } from '@mui/lab'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/hooks/hooks'
import { SET_PREVIOUS_CART } from '@/reducers/cartReducer'
export function BuyButton({id}){
    const [transition, setTransition] = useState(false)
    
    const cart = useSelector((state)=>state.cart.cart)
    const previousCart = useSelector((state)=>state.cart.previous)
    const dispatch = useAppDispatch()

    const getAllBefore = ()=> {
        let i = cart.indexOf(cart[cart.length-1])
        let arr = cart
        arr = i > -1 ? cart.slice(0, i) : []
        dispatch(SET_PREVIOUS_CART(arr))
    }
    
    useEffect(()=>{
        previousCart.some(element => element.id == id) ? 
        (setTransition(true))
        : (setTimeout(()=>{setTransition(true)}, 2000))
        /* console.log( previousCart.some(element => element.id == id)) */
        getAllBefore()
        console.log(cart[cart.length-1].id == id)
    },[])

    return(
        cart[cart.length-1].id == id && transition == true?
        <button id={id} className={styles.catalog_item_buy_btn}>
            <DoneIcon id={id} className={styles.done_icon}/>
        </button>
        :
        transition == false ?
        <LoadingButton loading variant="outlined" size="small" className={styles.loading_btn}>
            Loading
        </LoadingButton>
        :
        <button id={id} className={styles.catalog_item_buy_btn}>
            <DoneIcon id={id} className={styles.done_icon}/>
        </button>
    )
}