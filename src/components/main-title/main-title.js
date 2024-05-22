import styles from "./main-title.module.scss"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/hooks";
import { SET_CURRENT_CATALOG, catalogPriceAdapter } from "@/reducers/catalogReducer";

const inter = Inter({
    weight:['400'],
    style: ['normal'],
    subsets:['latin']
  })

export default function MainTitle({title}){

    const dispatch = useAppDispatch()
    const [sort, setSort] = useState('Name')
    const catalog = useSelector((state)=>state.catalog.catalog)

    const priceSort = ()=>{
        const catalogPriceSort = catalog.data.slice().sort((a,b)=>{
            if(a.price>b.price){
                return 1
            }
            if(a.price<b.price){
                return -1
            }
            return 0
        })
        dispatch(SET_CURRENT_CATALOG(catalogPriceSort))
    }

    const nameSort = ()=>{
        const catalogNameSort = catalog.data.slice().sort((a,b)=>{
            if(a.title>b.title){
                return 1
            }
            if(a.title<b.title){
                return -1
            }
            return 0
        })
        dispatch(SET_CURRENT_CATALOG(catalogNameSort))
    }

    const handleChange = (event) => {
        setSort(event.target.value)
        const target = event.target.value
        if(target=='Price'){
            priceSort()
        }
        if(target == 'Name'){
            nameSort()
        }
    };

    return(
        <>
        <div className={styles.main_title}>
            <div className={styles.main_title_container}>
                <h2>{title}</h2>
                <div className={styles.main_title_sort_container}>
                    <p>SORT BY</p>
                    <Box sx={{ minWidth: 120 }} className={inter.className}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                        value={sort}
                        onChange={handleChange}
                        >
                        <MenuItem value='Name'>Name</MenuItem>
                        <MenuItem value='Price'>Price</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
            </div>
        </div>
        </>
    )
}