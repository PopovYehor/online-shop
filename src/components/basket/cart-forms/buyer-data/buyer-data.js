import { useRef } from "react"
import styles from "./buyer-data.module.scss"
import { inputValidate } from "@/helpers/form-scripts/checkInputScripts"
import { regExEmail, regExName, regExPhone } from "@/helpers/form-scripts/regEx"
export default function BuyerData(){

    const nameRef = useRef(null)
    const nameErrorRef = useRef(null)
    const emailRef = useRef(null)
    const emailErrorRef = useRef(null)
    const phoneRef = useRef(null)
    const phoneErrorRef = useRef(null)

    return(
        <form className={styles.buyer_data} name="buyer_form">
            <div className={styles.bayer_data_wrap}>
                <div className={styles.bayer_data_container}>
                    <h2>Your data</h2>
                    <p>Fill in all required fields</p>
                    <div className={styles.data_input_container}>
                        <div className={styles.data_input_wrap}>
                            <input ref={nameRef} onBlur={()=>inputValidate(nameRef, nameErrorRef, regExName)} type="text" name="name" placeholder="Your fullname" />
                            <span className={"error_massege"} id="error_massege_name" ref={nameErrorRef}>*Incorect fullname</span>
                        </div>
                        <div className={styles.data_input_wrap}>
                            <input ref={emailRef} onBlur={()=>inputValidate(emailRef, emailErrorRef, regExEmail)} type="text" name="email" placeholder="Email"/>
                            <span ref={emailErrorRef} className={"error_massege"} id="error_massege_email">*Incorect email</span>
                        </div>
                        <div className={styles.data_input_wrap}>
                            <input ref={phoneRef} onBlur={()=>inputValidate(phoneRef, phoneErrorRef, regExPhone)} type="text" name="phone" placeholder="Phone number, format: (+44...)"/>
                            <span ref={phoneErrorRef} className={"error_massege"} id="error_massege_phone">*Incorect phone</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}