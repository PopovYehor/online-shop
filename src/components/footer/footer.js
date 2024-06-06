
import FooterTop from "@/components/footer/footer-top/footer-top"
import style from "./footer.module.scss"
import FooterMidle from "@/components/footer/footer-midle/footer-midle"
import FooterBottom from "@/components/footer/footer-bottom/footer-bottom"
import FooterMobile from "./footer-mobile/footer-mobile"
import { useState, useEffect } from "react"
export default function Footer(){
    const [mobile, setMobile] = useState(false)
    const checkWindowWidth = ()=>{
        document.body.clientWidth < 420 ? 
        setMobile(true) : setMobile(false)
    }
    useEffect(()=>{
        document.body.clientWidth < 420 ? 
        setMobile(true) : setMobile(false)
        window.addEventListener('resize', checkWindowWidth)
      }, [])
    return(
        <>
        <footer className={style.footer_style}>
            {!mobile?
            <>
            <FooterTop/>
            <FooterMidle/>
            <FooterBottom/>
            </>
            :<FooterMobile/>}
        </footer>
        </>
    )
}