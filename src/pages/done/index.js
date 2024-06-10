import BottomNav from "@/components/bottom-nav/bottom-nav";
import DoneItem from "@/components/done-item/done-item";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Done(){
    const router = useRouter()
    const order = useSelector((state)=>state.order.order)
    const [pageCheck, setPageCheck] = useState(false)

    useEffect(()=>{
        order.name == null ? (setPageCheck(false), router.push('/')) : setPageCheck(true)
    },[])

    return(
        <>
        {pageCheck &&
            <>
            <Header/>
            <DoneItem/>
            <Footer/>
            <BottomNav/>
            </>
        }
        </>
    )
}