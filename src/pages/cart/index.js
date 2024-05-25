import Header from "@/components/view/header/header"
import Footer from "@/components/view/footer/footer"
import Basket from "@/components/basket/basket"

export default function Cart(){
    return(
        <>
        <Header/>
        <div className="main-wrap">
            <Basket/>
        </div>
        <Footer/>
        </>
    )
}