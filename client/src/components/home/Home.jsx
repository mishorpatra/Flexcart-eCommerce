import { Box, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

//components\
import MidSection from './MidSection'
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import {getProducts as listProducts} from '../../redux/actions/ProductAction'



const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        backgroundColor: '#f1f1f1'
    },
    wrapper: {
        background: '#fff',
        padding: 5,
        margin: '12px 0 0 10px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
        
    },
    container: {
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    section: {
        display: 'flex'
    }
}))

const Home  = () => {
    const classes = useStyle()
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <Box className={classes.component}> 
                <Banner />
            <Box className={classes.section}>
                <Box className={classes.container}>
                    <Slide products={products} timer={true} title="Deal of the day" />
                </Box>
                    <Box className={classes.wrapper}>
                        <img src={adURL} style={{width: 230, height:'auto'}} />
                    </Box>
            </Box>
                <MidSection />
                <Slide products={products} timer={false} title="Best sellers" />
                <Slide products={products} time={false} title="Discount for you" />
                <Slide products={products} timer={false} title="Suggested items" />
                <Slide products={products} timer={false} title="Latest brands" />
            </Box>
        </div>
    )
}

export default Home