import styles from "./sale-slide.module.scss"
export default function SaleSlide(){
    const saleImg = 'https://images.pexels.com/photos/5650037/pexels-photo-5650037.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5650037.jpg&fm=jpg'

    let i = 0
    
    /* useEffect(()=>{
        const saleIndicator = document.querySelector('.sale-slider')
        saleIndicator.childNodes[0].classList.add('active')
        setInterval(()=>{
            if (i <= (arrImg.length-2)){
                i ++
                setSaleImg(arrImg[i])
            }else{
                i = 0
                setSaleImg(arrImg[i])
            }
        }, 5000)
        
    }, []) */
    
    return(
    <div className={styles.sale_wrap}>
        <div className={styles.sale_container}>
            <div className={styles.sale_img}>
                <img src={saleImg}/>
            </div>
            <div className={styles.sale_slider}>
                <div className={styles.slider_item}></div>
            </div>
        </div>
    </div>
    )
}