import Products from "@/components/product/product"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import BottomNav from "@/components/bottom-nav/bottom-nav"

export default function(){
    const [id, setId] = useState('')
    const [item, setItem] = useState({})
    const catalog = useSelector((state)=>state.catalog.catalog)

    useEffect(()=>{
        setId(window.location.href.replace('http://localhost:3000/product/', ''))
    },[])
    useEffect(()=>{
        catalog.data.forEach((elem)=>{
            elem.id == id ? setItem(elem) : null
        })
    },[id])
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