import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./order-button.module.scss"
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/hooks';
import { SET_ORDER_DELIVERY_ADDRES, SET_ORDER_DELIVERY_TYPE, SET_ORDER_EMAIL, SET_ORDER_NAME, SET_ORDER_PAYMENT_TYPE, SET_ORDER_PHONE } from '@/reducers/orderDataReducer';
import { regExAddres, regExEmail, regExName,regExPhone } from '@/helpers/regEx';
import { checkboxCheck, inputCheck } from '@/helpers/checkInputScripts';
export default function OrderButton(){

    const order = useSelector((state)=>state.order.order)
    const dispatch = useAppDispatch()

    const getData = ()=>{
        //forms
        const buyerForm = document.forms.buyer_form
        const deliveryForm = document.forms.delivery_form
        const paymentForm = document.forms.payment_form

        //inputs
        const names = buyerForm.elements.name
        const email = buyerForm.elements.email
        const phone = buyerForm.elements.phone
        const deliveryAddres = deliveryForm.elements.addres
        const allInputDeliveryForm = deliveryForm.getElementsByTagName('input')
        const allInputPaymentForm = paymentForm.getElementsByTagName('input')
        //error masege item
        const nameErrorMasege = document.getElementById('error_massege_name')
        const emailErrorMasege = document.getElementById('error_massege_email')
        const phoneErrorMasege = document.getElementById('error_massege_phone')
        const addresErrorMasege = document.getElementById('error_massege_addres')
        const deliveryErrorMassege = document.getElementById('error_massege_delivery')
        const paymentErrorMassege = document.getElementById('error_massege_payment')
        //error wraps
        const errorDeliveryWrap = document.getElementById('error_delivery_checkbox_wrap')
        const errorPaymentWrap = document.getElementById('error_payment_checkbox_wrap')

        inputCheck(names, nameErrorMasege, regExName, dispatch, SET_ORDER_NAME)
        inputCheck(email, emailErrorMasege, regExEmail, dispatch, SET_ORDER_EMAIL)
        inputCheck(phone, phoneErrorMasege, regExPhone, dispatch, SET_ORDER_PHONE)
        inputCheck(deliveryAddres, addresErrorMasege, regExAddres, dispatch, SET_ORDER_DELIVERY_ADDRES)
        checkboxCheck(allInputDeliveryForm, errorDeliveryWrap, deliveryErrorMassege, dispatch, SET_ORDER_DELIVERY_TYPE)
        checkboxCheck(allInputPaymentForm, errorPaymentWrap, paymentErrorMassege, dispatch, SET_ORDER_PAYMENT_TYPE)
        console.log(order)
    }

    
    return(
        <div className={styles.order_button}>
            <div className={styles.order_wrap}>
                <div className={styles.order_container}>
                    <Button /* href={'/done'} */ className={styles.checkout} onClick={getData}>
                        <ShoppingCartIcon/>
                        <p className={styles.button_text}>Checkout</p>
                    </Button>
                    <p className={styles.order_text}>By clicking “Checkout”, you consent to the processing of personal data and agree to the privacy policy.</p>
                </div>
            </div>
        </div>
    )
}