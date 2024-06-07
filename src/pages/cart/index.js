import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Basket from "@/components/basket/basket"
import BottomNav from "@/components/bottom-nav/bottom-nav"

export default function Cart(){
    return(
        <>
        <Header/>
        <div className="main-wrap">
            <Basket/>
        </div>
        <Footer/>
        <BottomNav/>
        </>
    )
}