import Header from "../header/header"
import PromoSlide from "@/components/promo-slide/promo-slide"
import MainTitle from "@/components/main-title/main-title"
import CatalogItem from "@/components/catalog-item/catalog-item"
import SaleSlide from "@/components/sale-slide/sale-slide"
import Footer from "../footer/footer"

export default function CatalogView({catalog_title, item}){
    return(
        <>
        <Header/>
        <PromoSlide/>
        <div className="main-wrap">
            <MainTitle title = {catalog_title}/>
            <div className="catalog-wripper">
                <div className="catalog-container">
                    <CatalogItem catalog_item={item}/>
                    <SaleSlide/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}