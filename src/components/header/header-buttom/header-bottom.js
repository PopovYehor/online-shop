import Link from "next/link"
import styles from './header-buttom.module.scss'
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function HeaderBottom (){

    const cart = useSelector((state)=>state.cart.cart)
    
    return(
<>
<div className={styles.header_bottom_wrap}>
    <div className={styles.header_bottom_container}>
        <div className={styles.shop_title_wrap}>
            <Link className={styles.shop_title} href="/">leo shop</Link>
        </div>
        <div className={styles.rout_filter_items}>
            <div className={styles.rout_filter_top }>
                <Link className={styles.filter_item} href="/">Catalog</Link>
                <Link className={styles.filter_item} href="/electronics">electronics</Link>
                <Link className={styles.filter_item} href="/jewelery">jewelery</Link>
            </div>
            <div className={styles.rout_filter_bottom}>
                <Link className={styles.filter_item} href="/men">men's clothing</Link>
                <Link className={styles.filter_item} href="/women">women's clothing</Link>
            </div>
        </div>
        <div className={styles.search_page_wrap}>
            <TextField className={styles.input_header} id="outlined-basic" label="Search" variant="outlined" size="small"/>
            <button className={styles.search_button}><SearchOutlinedIcon/></button>
        </div>
        <div className={styles.cart_wrap}>
            <button className={styles.sale_cart}><LoyaltyIcon/></button>
            <Link className={styles.sale_cart} href="/cart"><ShoppingCartIcon/></Link>
            <span className={cart.length > 0 ? styles.cart_count : styles.invisible}>{cart.length}</span>
        </div>
    </div>
</div>
</>
    )
}

export default HeaderBottom