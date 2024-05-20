import { useState } from "react"
import styles from "./sale-slide.module.scss"
import { useEffect } from "react"
export default function SaleSlide(){
    const img1 = 'https://images.pexels.com/photos/5650037/pexels-photo-5650037.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5650037.jpg&fm=jpg'
    const img2 = 'https://i.pinimg.com/736x/fc/3b/28/fc3b285b49f6b6ed164dbcfb74535387.jpg'
    const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDMlcOBJdqHhCzYajj6ppEti6_eLLNOueVXKjdXWZFA&s'
    
    const imgArray = [img1, img2, img3]

    const [img, setImg] = useState([imgArray[0]])

    let i = 0
    
    useEffect(()=>{
        const saleIndicator = document.getElementById('style-slder')
        saleIndicator.childNodes[0].classList.add('active')
        setInterval(()=>{
            if (i <= (imgArray.length-2)){
                i ++
                setImg(imgArray[i])
            }else{
                i = 0
                setImg(imgArray[i])
            }
        }, 5000)
        
    }, [])
    
    return(
    <div className={styles.sale_wrap}>
        <div className={styles.sale_container}>
            <div className={styles.sale_img}>
                <img src={img}/>
            </div>
            <div className={styles.sale_slider}>
                {imgArray.map((elem)=>{
                    return(
                        <div id="style-slder" className={img == elem ? `${styles.slider_item} ${styles.active}`: styles.slider_item}></div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}