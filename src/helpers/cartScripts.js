import { SET_CURRENT_CART } from "@/reducers/cart/cartReducer"

export const AddToBasket = (event, cart, catalog, hook)=>{
    const targetId = event.target.id
    let id = ''
    targetId == '' ? id= event.target.parentNode.id : id = targetId
    let cartCheck = cart.some(elem => elem.id == id)
    const count = 1
    if (!cartCheck){
        catalog.data.forEach(elem => {
            if(elem.id == id){
                const elementId = elem.id.toString()
                const summPrice = elem.price
                const elemWithCount = {...elem, count, summPrice, id:elementId}
                hook(SET_CURRENT_CART(elemWithCount))
            }
            else{null}
        })
    }
}