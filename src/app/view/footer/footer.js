
import FooterTop from "@/app/components/footer/footer-top/footer-top"
import style from "./footer.module.scss"
import FooterMidle from "@/app/components/footer/footer-midle/footer-midle"
import FooterBottom from "@/app/components/footer/footer-bottom/footer-bottom"

export default function Footer(){
    return(
        <>
        <footer className={style.footer_style}>
            <FooterTop/>
            <FooterMidle/>
            <FooterBottom/>
        </footer>
        </>
    )
}