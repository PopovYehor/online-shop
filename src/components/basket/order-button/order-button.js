import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./order-button.module.scss"
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/hooks';
import { SET_ORDER_DELIVERY_ADDRES, SET_ORDER_DELIVERY_TYPE, SET_ORDER_EMAIL, SET_ORDER_NAME, SET_ORDER_PAYMENT_TYPE, SET_ORDER_PHONE, SET_OREDER_CART } from '@/reducers/order/orderDataReducer';
import { regExAddres, regExEmail, regExName,regExPhone } from '@/helpers/form-scripts/regEx';
import { checkboxCheck, inputCheck } from '@/helpers/form-scripts/checkInputScripts';
import { useEffect } from 'react';
import { axios } from '@/services/axiosServices';
import { ORDER_URL } from '@/constants/api';
import { useState } from 'react';
 
import { redirect, useRouter } from 'next/navigation'
export default function OrderButton(){

    const order = useSelector((state)=>state.order.order)
    const cart = useSelector((state)=>state.cart.cart)
    const dispatch = useAppDispatch()

    const [orderStatus, setOrderStatus] = useState(0)
    const [orderError, setOrderError] = useState('')

    const router = useRouter()
    const getData =()=>{
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
        dispatch(SET_OREDER_CART(cart))
        
        const errorArr = [names, email, phone, deliveryAddres, deliveryErrorMassege, errorDeliveryWrap, errorPaymentWrap]
        const errorCheck = errorArr.some((elem)=>elem.classList.contains('error')||elem.classList.contains('error_checkbox'))

        if(errorCheck == false){
            router.push('/done')
            /* axios.post(ORDER_URL,order)
            .then(res=>{setOrderStatus(res.status)})
            .catch(error=>setOrderError(error)) */
            
        }
    }

    /* useEffect(()=>{
        const router = useRouter()
        if(orderStatus == 201){
            router.push('/done')
        }
    },[orderStatus]) */
    
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