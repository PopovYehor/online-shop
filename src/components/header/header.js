'use client'
import HeaderBottom from "@/components/header/header-buttom/header-bottom"
import HeaderTop from "@/components/header/header-top/header-top"
import { useEffect, useState } from "react"
import HeaderMobile from "./header-mobile/header-mobile"
export default function Header(){

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
        {!mobile?
        <>
        <HeaderTop/>
        <HeaderBottom/>
        </>
        :<HeaderMobile/>
        }
        </>
    )
}