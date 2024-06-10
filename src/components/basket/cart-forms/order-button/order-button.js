import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./order-button.module.scss"
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/hooks';
import { SET_CURRENT_ORDER, SET_CURRENT_ORDER_ERROR, SET_CURRENT_ORDER_STATUS, SET_ORDER_CREATEAT, SET_ORDER_DELIVERY_ADDRES, SET_ORDER_DELIVERY_TYPE, SET_ORDER_EMAIL, SET_ORDER_NAME, SET_ORDER_PAYMENT_TYPE, SET_ORDER_PHONE, SET_OREDER_CART } from '@/reducers/order/orderDataReducer';
import { regExAddres, regExEmail, regExName,regExPhone } from '@/helpers/form-scripts/regEx';
import { checkboxCheck, inputCheck } from '@/helpers/form-scripts/checkInputScripts';
import { useEffect } from 'react';
import { axios } from '@/services/axiosServices';
import { ORDER_URL } from '@/constants/api';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation'
import moment from 'moment';
import { SET_CHANGE_CART } from '@/reducers/cart/cartReducer';
export default function OrderButton(){

    const order = useSelector((state)=>state.order.order)
    const orderStatus = useSelector((state)=>state.order.status)
    const orderError = useSelector((state)=>state.order.error)
    const cart = useSelector((state)=>state.cart.cart)
    const [alert, setAlert] = useState(false)

    const dispatch = useAppDispatch()
    const router = useRouter()

    const setData =()=>{
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
        //set date
        const date = moment().format("DD-MM-YYYY HH:mm:ss")
        dispatch(SET_ORDER_CREATEAT(date))
        //first inputs check
        inputCheck(names, nameErrorMasege, regExName, dispatch, SET_ORDER_NAME)
        inputCheck(email, emailErrorMasege, regExEmail, dispatch, SET_ORDER_EMAIL)
        inputCheck(phone, phoneErrorMasege, regExPhone, dispatch, SET_ORDER_PHONE)
        inputCheck(deliveryAddres, addresErrorMasege, regExAddres, dispatch, SET_ORDER_DELIVERY_ADDRES)
        checkboxCheck(allInputDeliveryForm, errorDeliveryWrap, deliveryErrorMassege, dispatch, SET_ORDER_DELIVERY_TYPE)
        checkboxCheck(allInputPaymentForm, errorPaymentWrap, paymentErrorMassege, dispatch, SET_ORDER_PAYMENT_TYPE)
        //set cart
        dispatch(SET_OREDER_CART(cart))
        //second inputs check
        const errorArr = [names, email, phone, deliveryAddres, deliveryErrorMassege, errorDeliveryWrap, errorPaymentWrap]
        const errorCheck = errorArr.some((elem)=>elem.classList.contains('error')||elem.classList.contains('error_checkbox'))
        //to post req
        if(errorCheck == false){
            dispatch(SET_CURRENT_ORDER_STATUS('successful'))
        }
    }
    // order post req

    // for dev
    /* useEffect(()=>{
        if(orderStatus == 'successful'){
            axios.post(ORDER_URL,order)
            .then(res=>{
                dispatch(SET_CURRENT_ORDER_STATUS(res.status))
                dispatch(SET_CURRENT_ORDER(res.data))
            })
            .catch(error=>dispatch(SET_CURRENT_ORDER_ERROR(error)))
        }
    },[orderStatus]) */

    //for demo
    useEffect(()=>{
        if(orderStatus == 'successful'){
            axios.post(ORDER_URL,order)
            .then(res=>{
                dispatch(SET_CURRENT_ORDER_STATUS(res.status))
                dispatch(SET_CURRENT_ORDER(order))
            })
            .catch(error=>dispatch(SET_CURRENT_ORDER_ERROR(error)))
        }
    },[orderStatus]) 
    // route to done page 
    useEffect(()=>{
        if(orderStatus < 300){
            router.push('/done')
            dispatch(SET_CHANGE_CART([]))
        }
    },[orderStatus])
    // show alert if error
    useEffect(()=>{
        if(orderError!=null){
            setAlert(true)
        }
    },
    [orderError])
    
    return(
        <>
        <div className={styles.order_button}>
            <div className={styles.order_wrap}>
                <div className={styles.order_container}>
                    <Button className={styles.checkout} onClick={setData}>
                        <ShoppingCartIcon/>
                        <p className={styles.button_text}>Checkout</p>
                    </Button>
                    <p className={styles.order_text}>By clicking “Checkout”, you consent to the processing of personal data and agree to the privacy policy.</p>
                </div>
            </div>
        </div>
        {alert?
        <Alert severity="error" variant="filled" onClose={()=>{setAlert(false)}}>{orderError}</Alert>
        :null}
        </>
    )
}