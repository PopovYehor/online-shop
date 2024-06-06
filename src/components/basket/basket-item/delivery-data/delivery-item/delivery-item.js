import styles from "./delivery-item.module.scss"
export default function DeliveryItem({check, name, title, description, onclick}){
    return(
        <div className={styles.delivery_item}>
            <div className={check == name ? `${styles.checkbox_item} ${styles.active}` : styles.checkbox_item} 
                name = {name} onClick={(e)=>onclick(e)}>
                    <div className={styles.check}></div>
                    <input type="radio" name={name} value={name} checked={check == name} readOnly/>
            </div>
            <div className={styles.delivery_item_text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}