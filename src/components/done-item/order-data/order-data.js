import { useEffect, useState } from 'react'
import styles from './orderdata.module.scss'
import axios from 'axios'
export default function OrderData(){
    /* const order = useSelector((state)=>state.order.order) */
    const [summ, setSumm] = useState(0)
    const [order, setOrder] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:5000/order/666169d7c397d613479bf3cd')
        .then(res=>setOrder(res.data))
    },[])

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
                        <div className={styles.orderdata_items_img}>
                            <img src={item.image}/>
                        </div>
                        <div className={styles.orderdata_items_title}>
                            <span>{item.title}</span>
                        </div>
                        <div className={styles.orderdata_items_count}>
                            <span>{item.count}</span>
                        </div>
                        <div className={styles.orderdata_items_price}>
                            <span>{item.summPrice} $</span>
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
                    <span>Create order at: {order.createAt}</span>
                </div>
            </div>
        </div>
        </>
    )
}