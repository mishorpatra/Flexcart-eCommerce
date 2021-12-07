import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {Box, Typography, makeStyles, Button, Grid} from '@material-ui/core'
import CartItem from './CartItem'
import { removeItemFromCart } from '../../redux/actions/CartAction'
import EmptyCart from './EmptyCart'
import TotalView from './TotalView'
import { post } from '../../utils/paytm'
import { payUsingPaytm } from '../../service/api'

const useStyle = makeStyles(theme => ({
    component: {
       // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
       [theme.breakpoints.down('sm')]: {
            padding: '15px 0',
            flexDirection: 'column'
        }
    },
    leftComponent: {
      //  width: '67%',
      paddingRight: 15,
      [theme.breakpoints.down('sm')]: {
          marginBottom: 15
      }
    },
    header: {
        padding: '16px 28px',
        backgroundColor: '#fff'
    },
    placeOrder: {
        color: '#fff',
        width: 250,
        height: 50,
        borderRadius: 2,
        display: 'flex',
        marginLeft: 'auto',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            margin: 'auto',
            width: 350
        }
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        borderTop: '1px solid #f0f0f0',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 /10%)'
    }
}))

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
    const classes = useStyle()
    useEffect(() => {
        console.log(cartItems)
    })
    const dispatch = useDispatch()
    const removeFromCart = (id) => {
        dispatch(removeItemFromCart(id))
    }
   /* const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'sudip108paul@gmail.com'})
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information)
    }*/
    return (
        <>
            {
                cartItems.length ? 
                <Grid className={classes.component}>
                    <Grid item lg={9} md={9} sm={12} xm={12} className={classes.leftComponent}>
                        <Box className={classes.header}>
                            <Typography style={{fontSize: 18, fontWeight: 600}}>My Cart ({cartItems.length})</Typography>
                        </Box> 
                            {cartItems.map(item => (
                                <CartItem item={item} removeFromCart={removeFromCart} />
                            ))}
                        <Box className={classes.bottom} >
                            <Button  variant='contained' style={{background: '#fb641e'}} className={classes.placeOrder}>Place Your Order</Button>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xm={12}>
                    <TotalView cartItems={cartItems} />
                    </Grid>
                </Grid> :
                <Box>
                    <EmptyCart /> 
                </Box>
            } 
        </>
        
    )
}

export default Cart