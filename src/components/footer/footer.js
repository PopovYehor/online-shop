
import FooterTop from "@/components/footer/footer-top/footer-top"
import style from "./footer.module.scss"
import FooterMidle from "@/components/footer/footer-midle/footer-midle"
import FooterBottom from "@/components/footer/footer-bottom/footer-bottom"
import FooterMobile from "./footer-mobile/footer-mobile"
import { useState, useEffect } from "react"
import { useAppDispatch} from "@/hooks/hooks"
import { useSelector } from "react-redux"
import { checkMobile, checkMobileListener } from "@/helpers/mobileScripts/ismobile"

export default function Footer(){
    const mobile = useSelector((state)=>state.mobile.mobile)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        checkMobile(dispatch)
        checkMobileListener(dispatch)
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
            :
            <>
            <FooterMobile/>
            </>}
        </footer>
        </>
    )
}