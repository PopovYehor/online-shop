import Products from "@/components/product/product"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import { useSelector } from "react-redux"
import BottomNav from "@/components/bottom-nav/bottom-nav"

export default function(){
    const item = useSelector((state)=>state.catalog.selectProduct)
    return(
        <>
            <Header/>
            <Products 
            id={item.id}
            img={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            />
            <Footer/>
            <BottomNav/>
        </>
    )
}