import { useState, useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faTags, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import styles from './header-buttom.module.scss'
function HeaderBottom (){
    const [basketCount, setBasketCount] = useState(0)
    
    return(
<>
<div className={styles.header_bottom_wrap}>
    <div className={styles.header_bottom_container}>
        <div className={styles.shop_title_wrap}>
            <Link className={styles.shop_title} href="/">leo shop</Link>
        </div>
        <div className={styles.rout_filter_items}>
            <div className={styles.rout_filter_top }>
                <Link className={styles.filter_item} href="/catalog">Catalog</Link>
                <Link className={styles.filter_item} href="/electronics">electronics</Link>
                <Link className={styles.filter_item} href="/jewelery">jewelery</Link>
            </div>
            <div className={styles.rout_filter_bottom}>
                <Link className={styles.filter_item} href="/men">men's clothing</Link>
                <Link className={styles.filter_item} href="/women">women's clothing</Link>
            </div>
        </div>
        <div className={styles.search_page_wrap}>
            <input className={styles.search_page_input} placeholder="Search.."></input>
            <button className={styles.search_button}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <div className={styles.cart_wrap}>
            <button className={styles.sale_cart}><FontAwesomeIcon icon={faTags} /></button>
            <Link className={styles.sale_cart} href="/basket"><FontAwesomeIcon icon={faCartShopping} /></Link>
            <Link className={styles.cart_count} href="/basket"> cart ({basketCount})</Link>
        </div>
    </div>
</div>
</>
    )
}

export default HeaderBottom