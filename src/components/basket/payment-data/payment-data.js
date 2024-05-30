import { useState } from "react"
import DeliveryItem from "../basket-item/delivery-data/delivery-item/delivery-item"
import styles from "../basket-item/delivery-data/delivery-data.module.scss"
export default function PaymentData(){
    const [check, setCheck] = useState('')
    const handleCheck = (e)=>{
        const target = e.target
        const name = target.getAttribute('name') || target.parentNode.getAttribute('name')
        setCheck(name)
    }
    return(
        <form className={styles.basket_delivery_wrap} name="payment_form">
            <div className={styles.delivery_wrap}>
                <div className={styles.delivery_container}>
                <h2>Payment</h2>
                <div id="error_payment_checkbox_wrap">
                    <DeliveryItem check={check} name={'bank'} title={'Bank transfer'} description={'For legal entities'} onclick={handleCheck}/>
                    <DeliveryItem check={check} name={'cash'} title={'Cash payment'} onclick={handleCheck}/>
                    <DeliveryItem check={check} name={'card'} title={'Payment by bank card'} description={'Visa, Mastercard, Maestro'} onclick={handleCheck}/>
                    <span className="error_massege_checkbox" id="error_massege_payment">*Select payment type</span>
                </div>
                </div>
            </div>
        </form>
    )
}