 import {Box, Button, makeStyles} from '@material-ui/core'
 import {ShoppingCart, FlashOn} from '@material-ui/icons';
 import clsx from 'clsx'
 import { useDispatch } from 'react-redux'
 import { useNavigate } from 'react-router-dom'
 import { addToCart } from '../../redux/actions/CartAction'
 import { payUsingPaytm } from '../../service/api'
 import { post } from '../../utils/paytm'
  
 
 const useStyle = makeStyles(theme => ({
    component: {
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    image: {
        padding: '25px 10px',
        width: '96%',
        border: '1px solid #f2f2f2',
        [theme.breakpoints.down('sm')]: {
            width: '65%'
        }
    },
    button: {
        height: 60,
        width: '46%',
        borderRadius: 2,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            width: '30%',
            height: 40,
            fontSize: 12,
            padding: '2px 5px'
        }
        
    },
    addToCart: {
        color: '#fff',
        marginRight: 10
    },
    buyNow: {
        color: '#fff'
    }
 }))

 const ActionItem = ({ product }) => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const navigate = useNavigate()

     const addItemToCart = () => {
         dispatch(addToCart(product.id))
         navigate('/cart')
     }
     /*const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }*/
    return (
        <Box className={classes.component}>
            <img className={classes.image} src={product.detailUrl} /> <br />
            <Button variant='contained' style={{background: '#ff9f00'}} onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)}><ShoppingCart />  Add to Cart</Button>
            <Button variant='contained' style={{background: '#fb641b'}} className={clsx(classes.button, classes.buyNow)}><FlashOn />  By now</Button>
        </Box>
    )
 }

 export default ActionItem