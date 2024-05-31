import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import styles from "./footer-midle.module.scss"
import { avatars } from '@/accets/footer-avatar';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Link from 'next/link';
export default function FooterMidle(){

    const info = [
        'Seed utrices purus non.',
        'Sodales sodales.',
        'Curabitur pretium dui vitae',
        'Donec gravida mi in nisl.',
        'Faucibus leo condimentrum',
        'Donec et lorem suscipit'
    ]

    const storeContact = {
        name: 'Leo Store',
        media: 'Leopards media',
        addres: 'KVM Rpad, 4590GH',
        phone: '+44 0203 0484077',
        email: 'mail@mail.com'
    }
    
    return(
        <>
        <div className={styles.footer_middle_wrap}>
            <div className={styles.footer_middle_container}>
                <div className={`${styles.like_wrap} ${styles.footer_middle_item}`}>
                    <div className={`${styles.footer_like_title} ${styles.footer_middle_title}`}><h3>facebook</h3></div>
                    <div className={styles.footer_like_members}>
                        <span className={styles.footer_like_members_text}>20000 Members</span>
                        <button className={styles.footer_like_members_btn}><ThumbUpOutlinedIcon className={styles.like_svg}/> Like</button>
                    </div>
                    <div className={styles.footer_like_members_avatar}>
                        {avatars.map((avatar)=>{
                            return(
                                <div className={styles.footer_like_members_avatar_item}><img src={avatar}/></div>
                            )
                        })}
                    </div>
                    <div className={styles.footer_like_members_avatar_text}><span>facebook Social plugin</span></div>
                </div>
                <div className={`${styles.from_twitter_wrap} ${styles.footer_middle_item}`}>
                    <div className={`${styles.footer_from_twitter_title} ${styles.footer_middle_title}`}><h3>from twitter</h3></div>
                    <div className={styles.footer_from_twiter_text}>
                        <div className={styles.twitter_icon}><TwitterIcon style={{color: '#39a0b9'}}/></div>
                        <div className={styles.footer_from_twiter_description}>
                            <span><p className={styles.normal_text}>Lorem Ipsum is simply dummy text of the printing and <span className={styles.transpatent_text}>typesetting industry. Lorem Ipsum</span> Has been the</p></span>
                        </div>
                    </div>

                    <div className={styles.footer_from_twiter_text}>
                        <div className={styles.twitter_icon}><TwitterIcon style={{color: '#39a0b9'}}/></div>
                        <div className={styles.footer_from_twiter_description}>
                            <p className={styles.normal_text}>Lorem Ipsum is simply dummy text of the printing and <span className={styles.transpatent_text}>typesetting industry. Lorem Ipsum</span> Has been the</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.footer_information_wrap} ${styles.footer_middle_item}`}>
                    <div className={`${styles.footer_information_title} ${styles.footer_middle_title}`}><h3>information</h3></div>
                    <div className={styles.information_list_wrap}>
                        {info.map((info)=>{
                            return(
                                <div className={styles.information_list_item}><ChevronRightIcon/> <span>{info}</span> </div>
                            )
                        })}
                    </div>
                </div>

                <div className={`${styles.footer_contant_wrap} ${styles.footer_middle_item}`}>
                    <div className={`${styles.footer_contant_title} ${styles.footer_middle_title}`}><h3>contact us</h3></div>
                    <div className={styles.contact_information_wrap}>
                        <p className={styles.contact_information_item}>{storeContact.name}</p>
                        <p className={styles.contact_information_item}>{storeContact.media}</p>
                        <p className={styles.contact_information_item}>{storeContact.addres}</p>
                        <p className={styles.contact_information_item}>{storeContact.phone}</p>
                        <p className={styles.contact_information_item}>{storeContact.email}</p>
                    </div>
                    <div className={styles.contact_icons}>
                        <Link href={'https://www.facebook.com/'} passHref={true} className={styles.contact_icons_item}><FacebookIcon/></Link>
                        <Link href={'https://linkedin.com/'} passHref={true} className={styles.contact_icons_item}><LinkedInIcon/></Link>
                        <Link href={'https://www.google.com'} passHref={true}  className={styles.contact_icons_item}><GoogleIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}