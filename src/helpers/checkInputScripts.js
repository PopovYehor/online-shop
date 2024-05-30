export const checkboxCheck = (allInputs, errorWrap, errorMassege, hook, reducer)=>{
    const arrayAllInputDeliveryForm = Array.prototype.slice.call(allInputs)
    if(!arrayAllInputDeliveryForm.some(elem => elem.checked == true)){
        errorWrap.classList.add('error_checkbox')
        errorMassege.classList.add('active')
        errorWrap.scrollIntoView({behavior: 'smooth'})
    }else if(errorWrap.classList.contains('error_checkbox') && arrayAllInputDeliveryForm.some(elem => elem.checked == true)){
        errorWrap.classList.remove('error_checkbox')
        errorMassege.classList.remove('active')
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
    if(!regEx.test(formItem.value)){
        formItem.classList.add("error")
        massegeItem.classList.add('active')
        formItem.scrollIntoView({behavior: 'smooth'})
    }else if(formItem.classList.contains("error") && regEx.test(formItem.value)){
        formItem.classList.remove('error')
        massegeItem.classList.remove('active')
        hook(reducer(formItem.value))
    }else{
        hook(reducer(formItem.value))
    }
}