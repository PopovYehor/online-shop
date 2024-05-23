import { useAppDispatch } from "@/hooks/hooks"
import { SET_CURRENT_CART } from "@/reducers/cartReducer"
const dispatch = useAppDispatch

export const AddToBasket = (event, cart, catalog, hook)=>{
    const targetId = event.target.id
        let id = ''
        targetId == '' ? id= event.target.parentNode.id : id = targetId
        let cartCheck = cart.some(elem => elem.id == id)
        if (!cartCheck){
            catalog.data.forEach(elem => {
                elem.id == id ? hook(SET_CURRENT_CART(elem)) : null
            })
        }
}