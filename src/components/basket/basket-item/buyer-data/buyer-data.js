import styles from "./buyer-data.module.scss"
export default function BuyerData(){
    return(
        <div className={styles.buyer_data}>
            <div className={styles.bayer_data_wrap}>
                <div className={styles.bayer_data_container}>
                    <h2>Your data</h2>
                    <p>Fill in all required fields</p>
                    <input type="text" placeholder="Your name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone number"/>
                </div>
            </div>
        </div>
    )
}