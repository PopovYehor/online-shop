import styles from './footer-mobile.module.scss'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
export default function FooterMobile(){
    const storeContact = {
        name: 'Leo Store',
        media: 'Leopards media',
        addres: 'KVM Rpad, 4590GH',
        phone: '+44 0203 0484077',
        email: 'mail@mail.com'
    }
    return(
        <>
        <div className={styles.footer_mobile_wrap}>
            <div className={styles.footer_mobile_contact}>
                <h2 className={styles.footer_mobile_contact_header}>CONTACT US</h2>
                <p className={styles.footer_mobile_contact_item}>{storeContact.name}</p>
                <p className={styles.footer_mobile_contact_item}>{storeContact.media}</p>
                <p className={styles.footer_mobile_contact_item}>{storeContact.addres}</p>
                <p className={styles.footer_mobile_contact_item}>{storeContact.phone}</p>
                <p className={styles.footer_mobile_contact_item}>{storeContact.email}</p>
            </div>
            <div className={styles.footer_mobile_contact}>
                <h2 className={styles.footer_mobile_contact_header}>FOLLOW US</h2>
                <div className={styles.footer_mobile_icons}>
                    <Link href={'https://www.facebook.com/'} passHref={true} className={styles.footer_mobile_icons_item}><FacebookIcon/></Link>
                    <Link href={'https://linkedin.com/'} passHref={true} className={styles.footer_mobile_icons_item}><LinkedInIcon/></Link>
                    <Link href={'https://www.google.com'} passHref={true}  className={styles.footer_mobile_icons_item}><GoogleIcon/></Link>
                </div>
            </div>
        </div>
        </>
    )
}