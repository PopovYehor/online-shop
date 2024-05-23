import { useSelector } from "react-redux"
import styles from "./product.module.scss"
import { AddToBasket } from "@/helpers/cartScripts"
import { useAppDispatch } from "@/hooks/hooks"
import { Button } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react"
import DoneIcon from '@mui/icons-material/Done';
import Link from "next/link"
export default function Products({id, img, title, description, price}){
    const [transition, setTransition] = useState(false)
    const [cartCheck, setCartCheck] = useState(false)
    const cart = useSelector((state)=>state.cart.cart)
    const catalog = useSelector((state)=>state.catalog.catalog)
    const dispatch = useAppDispatch()

    const transitionBtn = ()=>{
        setCartCheck(true)
        setTimeout(()=>{setTransition(true)}, 2000)
    }

    useEffect(()=>{
        cart.some(element => element.id == id) ?
            (setTransition(true), setCartCheck(true))
            : (setTransition(false), setCartCheck(false))
    },[id])

    return(
        <div className={styles.main_description_wrap}>
            <div className={styles.main_description_container_wrap}>
                <div className={styles.description_img}>
                    <img  src={img} alt=""></img>
                </div>
                <div className={styles.main_description_container}>
                    <div className={styles.sale_description}>
                        <div className={styles.title_description}>
                            <h1 className={styles.title_product}>{title}</h1>
                            <p className={styles.product_description}>{description}</p>
                        </div>  
                        <p className={styles.price}>{price} $</p>              
                    </div>
                    <div className={styles.description_add_to_basket}>
                        {cart.length == 0 || cartCheck == false ?
                            <Button variant="outlined" size="large"
                                className={styles.add_button}
                                onClick={(e)=>{AddToBasket(e, cart, catalog, dispatch), transitionBtn()}}
                                id={id}>
                                BUY <ShoppingCartIcon/>
                            </Button>
                            : transition == false ?
                            <LoadingButton loading variant="outlined" size="large" className={styles.loading_btn}>
                                Loading
                            </LoadingButton>
                            :
                            <Button variant="outlined" size="large"
                                className={styles.add_button_done}
                                onClick={(e)=>AddToBasket(e, cart, catalog,dispatch)}
                                id={id}>
                                <Link href={"/"}>Continue shopping <DoneIcon/></Link> 
                            </Button>
                        }
                    </div>
                </div>
            </div>
        </div> 
    )
}