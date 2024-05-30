import Link from 'next/link'
import styles from './header-top.module.scss'

function HeaderTop (){
    return(
<div className={styles.header_top_wrap}>
    <div className={styles.header_top_container}>
        <div className={styles.page_parametr}>
            <div className={styles.language}>
                <span className={styles.language_label}>Language:</span>
                <select className={styles.language_select}>
                    <option>English</option>
                </select>
            </div>
            <div className={styles.currency}>
                <span className={styles.currency_label}>Currency:</span>
                <select className={styles.currency_select}>
                    <option>USD</option>
                </select>
            </div>
        </div>
        <div className={styles.rout_page_wrap}>
            <div className={styles.rout_page_items}>
                <a className={styles.rout_page_item}>Account</a>
                <span>|</span>
                <a className={styles.rout_page_item}>Wishlist</a>
                <span>|</span>
                <Link href='/cart' className={styles.rout_page_item}>Checkout</Link>
                <span>|</span>
                <a className={styles.rout_page_item}>Log In</a>
                <span>|</span>
                <a className={styles.rout_page_item}>Sign Up</a>
            </div>
        </div> 
    </div>
</div>  
    )
}

export default HeaderTop