import { useEffect, useState } from 'react'
import styles from './orderdata.module.scss'
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux'
export default function OrderData(){
    const order = useSelector((state)=>state.order.order)
    /* const arr = {
        cart: [{
                count: 0,
                image: "",
                summPrice: 0,
                title: "",
            }],
        id: "",
        createAt: "",
        deliveryAddres: "",
        deliveryType: "",
        email: "",
        name: "",
        paymentType: "",
        phone: ""
    } */
    const [summ, setSumm] = useState(0)
    /* const [order, setOrder] = useState(arr) */
    /* useEffect(()=>{
        axios.get('http://localhost:5000/order/666193517d95269792ba8ec4')
        .then(res=>setOrder(res.data))
    },[]) */

    useEffect(()=>{
        setSumm(()=>{
            return(
                order.cart.reduce((accumulator, object) => {
                    return (accumulator + object.summPrice)
                  }, 0)
            )
        })
    }, [order])
    return(
        <>
        <div className={styles.orderdata_wrap}>
            <div className={styles.orderdata_items}>
                {order.cart.map((item)=>{
                    return(
                        <>
                        <div className={styles.order_items_wrap}>
                            <div className={styles.orderdata_items_img}>
                                <img src={item.image}/>
                            </div>
                            <div className={styles.order_items_container}>
                                <div className={styles.orderdata_items_title}>
                                    <span>{item.title}</span>
                                </div>
                                <div className={styles.orderdata_items_count}>
                                    <span>Pieces: {item.count}</span>
                                </div>
                                <div className={styles.orderdata_items_price}>
                                    <span>Price: {item.summPrice} $</span>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })}
                <div className={styles.orderdata_data}>
                    <span>Order №: {order.id.replace(/[a-z]/g, '')}</span>
                    <span>Name: {order.name}</span>
                    <span>Phone: {order.phone}</span>
                    <span>Email: {order.email}</span>
                    <span>Delivery addres: {order.deliveryAddres}</span>
                    <span>Delivery type: {order.deliveryType}</span>
                    <span>Payment type: {order.paymentType}</span>
                    <span>To pay: {summ} $</span>
                    <span>Create order at: {moment(order.createAt, "DD-MM-YYYY hh:mm:ss").format('DD/MM/YY hh:mm')}</span>
                </div>
            </div>
        </div>
        </>
    )
}