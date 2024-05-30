import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import styles from "./footer-midle.module.scss"

export default function FooterMidle(){
    
    return(
        <>
        <div className={styles.footer_middle_wrap}>
            <div className={styles.footer_middle_container}>
                <div className={`${styles.like_wrap} ${styles.footer_middle_item}`}>
                    <div className={`${styles.footer_like_title} ${styles.footer_middle_title}`}><h3>facebook</h3></div>
                    <div className={styles.footer_like_members}>
                        <span className={styles.footer_like_members_text}>20000 Members</span>
                        <button className={styles.footer_like_members_btn}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/640px-Facebook_Thumb_icon.svg.png"></img> Like</button>
                    </div>
                    <div className={styles.footer_like_members_avatar}>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-06.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://static.generated.photos/vue-static/face-generator/landing/demo-previews/sex.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://static.generated.photos/vue-static/face-generator/landing/wall/7.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://static.generated.photos/vue-static/face-generator/landing/demo-previews/skin-tone.jpg"></img></div>
                        <div className={styles.footer_like_members_avatar_item}><img src="https://images.generated.photos/ULY0hGog-fvXFtR1wPhD5FfkL4hRYyeJphE0keXvOtw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTI1NDQ2LmpwZw.jpg"></img></div>
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
                        <div className={styles.information_list_item}><ChevronRightIcon/> <span>Seed utrices purus non.</span> </div>
                        <div className={styles.information_list_item}><ChevronRightIcon/> <span>Sodales sodales.</span></div>
                        <div className={styles.information_list_item}><ChevronRightIcon/> <span>Curabitur pretium dui vitae</span>.</div>
                        <div className={styles.information_list_item}><ChevronRightIcon/> <span>Donec gravida mi in nisl.</span></div>
                        <div className={styles.information_list_item}><ChevronRightIcon/> <span>Faucibus leo condimentrum.</span></div>
                        <div className={styles.information_list_item}><ChevronRightIcon/> <span>Donec et lorem suscipit</span></div>
                    </div>
                </div>

                <div className={`${styles.footer_contant_wrap} ${styles.footer_middle_item}`}>
                    <div className={`${styles.footer_contant_title} ${styles.footer_middle_title}`}><h3>contact us</h3></div>
                    <div className={styles.contact_information_wrap}>
                        <p className={styles.contact_information_item}>Leo Store</p>
                        <p className={styles.contact_information_item}>Leopards media</p>
                        <p className={styles.contact_information_item}>KVM Rpad, 4590GH</p>
                        <p className={styles.contact_information_item}>+1 48988880099</p>
                        <p className={styles.contact_information_item}>mail@email.com</p>
                    </div>
                    <div className={styles.contact_icons}>
                        <div className={styles.contact_icons_item}><FacebookIcon/></div>
                        <div className={styles.contact_icons_item}><LinkedInIcon/></div>
                        <div className={styles.contact_icons_item}><GoogleIcon/></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}