import styles from "./footer-bottom.module.scss"
export default function FooterBottom(){
    return(
        <div className={styles.footer_bottom_wrap}>
            <div className={styles.footer_bottom_container}>
                <div className={styles.footer_bottom_item}>
                    <span className={styles.footer_bottom_item_description}>© Copyright 2013 Css Autor, All Rights Reserved.</span>
                </div>
                <div className={styles.footer_bottom_item}>
                    <a className={styles.footer_bottom_item_description}>About Us</a>
                    <span className={styles.footer_bottom_item_description}>|</span>
                    <a className={styles.footer_bottom_item_description}>{'Delivery & Returns'}</a>
                    <span className={styles.footer_bottom_item_description}>|</span>
                    <a className={styles.footer_bottom_item_description}>{'Terms & Conditions'}</a>
                    <span className={styles.footer_bottom_item_description}>|</span>
                    <a className={styles.footer_bottom_item_description}>Contact Us</a>
                </div>
            </div>
        </div>
    )
}