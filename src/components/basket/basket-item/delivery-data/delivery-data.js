import styles from "./delivery-data.module.scss"
import { useRef, useState } from "react"
import DeliveryItem from "./delivery-item/delivery-item"
import { inputValidate } from "@/helpers/form-scripts/checkInputScripts"
import { regExAddres } from "@/helpers/form-scripts/regEx"
import { errorRemove } from "@/helpers/form-scripts/checkInputScripts"
export default function DeliveryData(){
    const [check, setCheck] = useState('')

    const addresRef = useRef(null)
    const addresErrorRef = useRef(null)
    const deliveryRef = useRef(null)
    const deliveryErrorRef = useRef(null)

    const handleCheck = (e)=>{
        const target = e.target
        const name = target.getAttribute('name') || target.parentNode.getAttribute('name')
        setCheck(name)
        if(deliveryRef.current.classList.contains('error_checkbox')){
            errorRemove(deliveryRef.current, 'error_checkbox')
            errorRemove(deliveryErrorRef.current, 'active')
        }
    }
    return(
        <>
        <form className={styles.basket_delivery_wrap} name="delivery_form">
            <div className={styles.delivery_wrap}>
                <div className={styles.delivery_container}>
                <h2>Delivery</h2>
                <div id="error_delivery_checkbox_wrap" ref={deliveryRef}>
                    <DeliveryItem check={check} name={'pickup'} title={'Pickup'} description={'London, 221B Baker St.'} onclick={handleCheck}/>
                    <DeliveryItem check={check} name={'courier'} title={'Delivery by courier'} description={'Only in London'} onclick={handleCheck}/>
                    <DeliveryItem check={check} name={'postal'} title={'Delivery by postal company'} description={'Royal Mail, DHL, UPS, FedEx'} onclick={handleCheck}/>
                    <span ref={deliveryErrorRef} className="error_massege_checkbox" id="error_massege_delivery">*Select delivery type</span>
                </div>
                <h2 className={styles.adres_delivery_title}>Delivery address</h2>
                <p>Enter delivery address</p>
                <div className={styles.data_input_wrap}>
                    <input ref={addresRef} onBlur={()=>inputValidate(addresRef, addresErrorRef, regExAddres)} type="text" name="addres" placeholder="Delivery address"/>
                    <span ref={addresErrorRef} className={"error_massege error_addres"} id="error_massege_addres">*Incorect addres</span>
                </div>
                </div>
            </div>
        </form>
        </>
    )
}