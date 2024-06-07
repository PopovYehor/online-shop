import BottomNav from "@/components/bottom-nav/bottom-nav";
import DoneItem from "@/components/done-item/done-item";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import DoneIcon from '@mui/icons-material/Done';
import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function Done(){
    const order = useSelector((state)=>{state.order.order})
    useEffect(()=>{
        console.log(order)
    },[])
    return(
        <>
        <Header/>
        <DoneItem/>
        <Footer/>
        <BottomNav/>
        </>
    )
}