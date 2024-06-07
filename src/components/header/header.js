'use client'
import HeaderBottom from "@/components/header/header-buttom/header-bottom"
import HeaderTop from "@/components/header/header-top/header-top"
import { useEffect, useState } from "react"
import HeaderMobile from "./header-mobile/header-mobile"
import { useSelector } from "react-redux"
import { useAppDispatch } from "@/hooks/hooks"
import { checkMobile, checkMobileListener } from "@/helpers/mobileScripts/ismobile"

export default function Header(){
    const mobile = useSelector((state)=>state.mobile.mobile)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        checkMobile(dispatch)
        checkMobileListener(dispatch)
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