import styles from "./done-item.module.scss"
import DoneIcon from '@mui/icons-material/Done';
import OrderData from "./order-data/order-data";
export default function DoneItem(){
    return(
        <div className={styles.done_wrap}>
            <div className={styles.done_item}>
                <DoneIcon className={styles.done_icon}/>
            </div>
            <div className={styles.done_item_text}>
                <h3 className={styles.done_item_header}>Order is processed</h3>
                <p className={styles.done_item_description}>Thank you for choosing us! A manager will contact you soon to clarify your order</p>
            </div>
            <div className={styles.done_orderdata_container}>
                <OrderData/>
            </div>
        </div>
    )
}