import Footer from "@/components/view/footer/footer";
import Header from "@/components/view/header/header";
import DoneIcon from '@mui/icons-material/Done';
export default function Done(){
    return(
        <>
        <Header/>
        <div className='done_wrap'>
            <div className="done_item_gradient">
                <div className="done_item">
                    <DoneIcon className="done_icon"/>
                </div>
            </div>
            <div className="done_item_text">
                <h3 className="done_item_header">Order is processed</h3>
                <p className="done_item_description">Thank you for choosing us! A manager will contact you soon to clarify your order</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}