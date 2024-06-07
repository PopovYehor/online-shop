import { useEffect, useState } from 'react'
import styles from './orderdata.module.scss'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
export default function OrderData(){
    const order = useSelector((state)=>state.order.order)
    const [summ, setSumm] = useState(0)
    const router = useRouter()

    useEffect(()=>{
        if(order.name == null){
            router.push('/')
        }
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