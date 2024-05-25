import styles from "./catalog-item.module.scss"
import Link from "next/link";
import {BuyButton} from "./buy-button/buy-button";
export default function CatalogItem ({catalog_item}){

return(
    <>  
        <div className={styles.catalog_container}>
            {catalog_item.data.map((elem)=>{
                return (
                    <div  className={styles.catalog_item} >
                        <div className={styles.catalog_item_img}>
                        <Link href={`/product/${elem.id}`}><img src={elem.image} id={elem.id}/></Link>
                        </div>
                        <div className={styles.catalog_item_descriptions}>
                            <div className={styles.catalog_item_description}>
                            <Link  d={elem.id}  href={`/product/${elem.id}`} className={styles.catalog_item_name}>{elem.title}</Link>
                                <span className={styles.catalog_item_price}>{elem.price} $</span>
                            </div>
                            <div className={styles.catalog_item_buy} id={elem.id}>
                                <BuyButton id={elem.id}/>   
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
    )
}