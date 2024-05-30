import styles from "./buyer-data.module.scss"
export default function BuyerData(){
    return(
        <form className={styles.buyer_data} name="buyer_form">
            <div className={styles.bayer_data_wrap}>
                <div className={styles.bayer_data_container}>
                    <h2>Your data</h2>
                    <p>Fill in all required fields</p>
                    <div className={styles.data_input_container}>
                        <div className={styles.data_input_wrap}>
                            <input type="text" name="name" placeholder="Your name"/>
                            <span className={"error_massege"} id="error_massege_name">*Incorect name</span>
                        </div>
                        <div className={styles.data_input_wrap}>
                            <input type="text" name="email" placeholder="Email"/>
                            <span className={"error_massege"} id="error_massege_email">*Incorect email</span>
                        </div>
                        <div className={styles.data_input_wrap}>
                            <input type="text" name="phone" placeholder="Phone number, format: (+44...)"/>
                            <span className={"error_massege"} id="error_massege_phone">*Incorect phone</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}