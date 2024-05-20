import styles from "./main-title.module.scss"
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { Inter } from "@next/font/google";

const inter = Inter({
    weight:['400'],
    style: ['normal'],
    subsets:['latin']
  })

export default function MainTitle(){

    const [age, setSort] = useState('Name')

    const handleChange = (event) => {
        setSort(event.target.value);
        console.log(age)
      };
    return(
        <>
        <div className={styles.main_title}>
            <div className={styles.main_title_container}>
                <h2>CATALOG</h2>
                <div className={styles.main_title_sort_container}>
                    <p>SORT BY</p>
                    <Box sx={{ minWidth: 120 }} className={inter.className}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                        value={age}
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