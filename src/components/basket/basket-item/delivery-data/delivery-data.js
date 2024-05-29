import styles from "./delivery-data.module.scss"
import { useState } from "react"
import DeliveryItem from "./delivery-item/delivery-item"
export default function DeliveryData(){
    const [check, setCheck] = useState('')

    const handleCheck = (e)=>{
        const target = e.target
        const name = target.getAttribute('name') || target.parentNode.getAttribute('name')
        setCheck(name)
    }
    return(
        <>
        <div className={styles.basket_delivery_wrap}>
            <div className={styles.delivery_wrap}>
                <div className={styles.delivery_container}>
                <h2>Delivery</h2>
                <DeliveryItem check={check} name={'pickup'} title={'Pickup'} description={'London, 221B Baker St.'} onclick={handleCheck}/>
                <DeliveryItem check={check} name={'courier'} title={'Delivery by courier'} description={'Only in London'} onclick={handleCheck}/>
                <DeliveryItem check={check} name={'postal'} title={'Delivery by postal company'} description={'Royal Mail, DHL, UPS, FedEx'} onclick={handleCheck}/>
                <h2 className={styles.adres_delivery_title}>Delivery address</h2>
                <p>Enter delivery address</p>
                <input type="text" placeholder="Delivery address"/>
                </div>
            </div>
        </div>
        </>
    )
}