import styles from './footer-top.module.scss'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
export default function FooterTop(){
    return(
        <>
        <div className={styles.footer_top_wrap}>
            <div className={styles.footer_top_container}>
                <div className={`${styles.delivery_info} ${styles.footer_top_item}`}>
                    <div className={`${styles.delivery_icon} ${styles.footer_top_icon}`}><LocalShippingIcon/></div>
                    <span className={`${styles.delivery_description} ${styles.footer_top_description}`}>free shiping on orders over 100$</span>
                </div>
                <div className={`${styles.delivery_info} ${styles.footer_top_item}`}>
                    <div className={`${styles.delivery_icon} ${styles.footer_top_icon}`}><PhoneIcon/></div>
                    <span className={`${styles.delivery_description} ${styles.footer_top_description}`}>call us! toll free 409-8888-0099</span>
                </div>
            </div>
        </div>
        </>
    )
}