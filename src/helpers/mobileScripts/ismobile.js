import { SET_MOBILE } from "@/reducers/isMobile/isMobile"

export const checkMobile = (hook)=>{
    document.body.clientWidth < 451 ? 
    hook(SET_MOBILE(true)): hook(SET_MOBILE(false))
}

export const checkMobileListener = (hook)=>{
   return window.addEventListener('resize', ()=>{checkMobile(hook)})
}