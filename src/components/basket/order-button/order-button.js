import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./order-button.module.scss"
import { Button } from '@mui/material';
import Link from 'next/link';
export default function OrderButton(){
    return(
        <div className={styles.order_button}>
            <div className={styles.order_wrap}>
                <div className={styles.order_container}>
                    <Link href={'/done'}>
                        <ShoppingCartIcon/>
                        <p className={styles.button_text}>Checkout</p>
                    </Link>
                    <p className={styles.order_text}>By clicking “Checkout”, you consent to the processing of personal data and agree to the privacy policy.</p>
                </div>
            </div>
        </div>
    )
}