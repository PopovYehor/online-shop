import { errorRemove } from "./checkInputScripts"
export const checkboxitemCheck = (e, setCheck, inputRef, errorRef)=>{
    const target = e.target
    const name = target.getAttribute('name') || target.parentNode.getAttribute('name')
    setCheck(name)
    if(deliveryRef.current.classList.contains('error_checkbox')){
        errorRemove(inputRef.current, 'error_checkbox')
        errorRemove(errorRef.current, 'active')
    }
}