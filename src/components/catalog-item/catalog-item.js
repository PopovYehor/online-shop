import styles from "./catalog-item.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { SET_CURRENT_CART } from "@/reducers/cartReducer";

export default function CatalogItem ({catalog_item}){

    const dispatch = useAppDispatch()
    const catalog = useSelector((state)=>state.catalog.catalog)
    const cart = useSelector((state)=>state.cart.cart)

    const handleCartChange = (event)=>{
        const targetId = event.target.id
        let id = ''
        targetId == '' ? id= event.target.parentNode.id : id = targetId
        let cartCheck = cart.some(elem => elem.id == id)
        if (!cartCheck){
            catalog.data.forEach(elem => {
                elem.id == id ? dispatch(SET_CURRENT_CART(elem)) : null
            })
        }
    }
    useEffect(()=>{console.log('catalog', catalog_item.data)},[])

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
                                <button id={elem.id}
                                    className={cart.some(element => element.id == elem.id) ? `${styles.catalog_item_buy_btn} ${styles.active}` : styles.catalog_item_buy_btn}
                                    onClick={handleCartChange}>
                                        <FontAwesomeIcon id={elem.id} icon={ faBasketShopping}/>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}