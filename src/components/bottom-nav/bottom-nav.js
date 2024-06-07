import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./bottom-nav.module.scss"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/hooks';
import { checkMobile, checkMobileListener } from '@/helpers/mobileScripts/ismobile';

export default function BottomNav(){
    const mobile = useSelector((state)=>state.mobile.mobile)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(0);
    const router = useRouter()
    const redirect = (href)=>{
        router.push(href)
    }
    useEffect(()=>{
        checkMobile(dispatch)
        checkMobileListener(dispatch)
    }, [])
    return(
        <>
        {mobile?
        <Box className={styles.bottom_nav_wrap}>
            <BottomNavigation
            className={styles.bottom_nav_container}
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            >
            <BottomNavigationAction onClick={()=>redirect('/')} label="Home" icon={<HomeIcon />}/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}/>
            <BottomNavigationAction onClick={()=>redirect('/cart')} label="Cart" icon={<ShoppingCartIcon />}/>
            </BottomNavigation>
        </Box>
        :null}
        </>
    )
}