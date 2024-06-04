export const errorAdd = (wrap, style)=>wrap.classList.add(style)
export const errorRemove = (wrap, style)=> wrap.classList.remove(style)

export const checkboxCheck = (allInputs, errorWrap, errorMassege, hook, reducer)=>{
    const arrayAllInputDeliveryForm = Array.prototype.slice.call(allInputs)
    if(!arrayAllInputDeliveryForm.some(elem => elem.checked == true)){
        errorAdd(errorWrap, 'error_checkbox')
        errorAdd(errorMassege, 'active')
        errorWrap.scrollIntoView({behavior: 'smooth'})
    }else if(errorWrap.classList.contains('error_checkbox') && arrayAllInputDeliveryForm.some(elem => elem.checked == true)){
        errorRemove(errorWrap, 'error_checkbox')
        errorRemove(errorMassege, 'active')
        arrayAllInputDeliveryForm.forEach((elem)=>{
            elem.checked == true? hook(reducer(elem.name)) : null
        })
    }else{
        arrayAllInputDeliveryForm.forEach((elem)=>{
            elem.checked == true? hook(reducer(elem.name)) : null
        })
    }
}

export const inputCheck = (formItem, massegeItem, regEx, hook, reducer )=>{
    if(regEx.test(formItem.value) == false){
        errorAdd(formItem, 'error')
        errorAdd(massegeItem, 'active')
        formItem.scrollIntoView({behavior: 'smooth'})
    }else if(formItem.classList.contains("error") && regEx.test(formItem.value) == true){
        errorRemove(formItem, 'error')
        errorRemove(massegeItem, 'active')
        hook(reducer(formItem.value))
    }else{
        hook(reducer(formItem.value))
    }
}

export const inputValidate = (refInput, refMessege, regEx)=>{
    if(!regEx.test(refInput.current.value)){
        errorAdd(refInput.current, 'error')
        errorAdd(refMessege.current, 'active')
    }else{
        errorRemove(refInput.current, 'error')
        errorRemove(refMessege.current, 'active')
    }

}