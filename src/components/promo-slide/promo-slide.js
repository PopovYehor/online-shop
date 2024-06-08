import styles from "./promo-slide.module.scss"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";
export default function PromoSlide (){

    const slide1 = 'https://github.com/PopovYehor/ReactApp/blob/Shop/src/assets/slider-1.jpg?raw=true'
    const slide2 = 'https://github.com/PopovYehor/ReactApp/blob/Shop/src/assets/slider-2.jpg?raw=true'
    const slide3 = 'https://github.com/PopovYehor/ReactApp/blob/Shop/src/assets/slider-3.jpg?raw=true'
    const arrSlide = [slide1, slide2, slide3]
    const arrSliderMainText = ['aluminium club', 'cool sound', 'be beautiful']
    const arrSliderDescriptionText = ['expirience ray-ban', 'listen sony', 'put on zara']
    const [sliderImg, setSliderImg] = useState(arrSlide[0])
    const [slideMainText, setSlideMainText] = useState(arrSliderMainText[0])
    const [slideDescriptionText, setSlideDescriptionText] = useState(arrSliderDescriptionText[0])
    const [slideIndex, setSlideIndex] = useState(0)

    const slider = (e)=>{
        const target = e.target
        if (target.getAttribute('id') == 'slider-right'){
            if(slideIndex !== arrSlide.length-1){
                setSlideIndex(slideIndex+1)
                setSliderImg(arrSlide[slideIndex+1])
                setSlideMainText(arrSliderMainText[slideIndex+1])
                setSlideDescriptionText(arrSliderDescriptionText[slideIndex+1])
            }else if(slideIndex === arrSlide.length-1){
                setSlideIndex(0)
                setSliderImg(arrSlide[0])
                setSlideMainText(arrSliderMainText[0])
                setSlideDescriptionText(arrSliderDescriptionText[0])
            }
        }
        if (target.getAttribute('id') == 'slider-left'){
            if(slideIndex === 0){
                setSlideIndex(arrSlide.length-1)
                setSliderImg(arrSlide[arrSlide.length-1])
                setSlideMainText(arrSliderMainText[arrSliderMainText.length-1])
                setSlideDescriptionText(arrSliderDescriptionText[arrSliderDescriptionText.length-1])
            }else if(slideIndex!==0){
                setSlideIndex(slideIndex-1)
                setSliderImg(arrSlide[slideIndex-1])
                setSlideMainText(arrSliderMainText[slideIndex-1])
                setSlideDescriptionText(arrSliderDescriptionText[slideIndex-1])
            }
        }
    }

    return(
        <>
        <div className={styles.promo_slider_wrap}>
            <img className={styles.slide_item_img} src={sliderImg}></img>
            <div className={styles.promo_slider_container}>
                <div className={styles.promo_lider_btn} id="slider-left" onClick={(e)=>slider(e)}><ChevronLeftIcon id="slider-left"/></div>
                <div className={styles.promo_slider_description}>
                    <div  className={`${styles.promo_slider_item_name} ${styles.slider_item_text}`}>
                        <span>{slideMainText}</span>
                    </div>
                    <div className={`${styles.promo_slider_item_description} ${styles.slider_item_text}`}>
                        <span >{slideDescriptionText}</span>
                    </div>
                </div>
                <div className={styles.promo_lider_btn} id="slider-right" onClick={(e)=>slider(e)}><ChevronRightIcon id="slider-right"/></div>
            </div>
        </div>
        </>
    )
}