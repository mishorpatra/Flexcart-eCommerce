import { Card, Box, makeStyles, Typography, Button } from '@material-ui/core'
import clsx from 'clsx'

//component

import GroupButton from './GroupButton'


const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0
    },
    rightComponent: {
        margin: 20
    },
    leftComponent: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    smalltext: {
        fontSize: 14
    },
    greyTextColor: {
        color: '#787878'
    },
    price: {
        fontSize: 20,
        fontWeight: 600
    },
    image: {
        height: 110,
        width: 100
    }
})

const CartItem = ({item, removeFromCart}) => {
    const classes = useStyle()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <Card className={classes.component}>
            
                <Box className={classes.leftComponent}>
                   <img src={item.url} className={classes.image} />
                   <GroupButton />
                </Box>
                <Box className={classes.rightComponent} >
                    <Typography>{item.title.longTitle}</Typography>
                    <Typography style={{marginTop: 10}} className={clsx(classes.smalltext, classes.greyTextColor)}>Seller: SuperCoinNet<img style={{width: 50, marginLeft: 10}}src={fassured} /></Typography>
                    <Typography style={{margin: '10px 0'}}>
                        <span className={classes.price} >₹{item.price.cost}</span>  &nbsp; &nbsp;
                        <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span> &nbsp; &nbsp;  
                        <span style={{color: '#388f3c'}}>{item.price.discount} off</span>   
                    </Typography>
                    <Button style={{background: '#2874f0', color: '#fff', fontSize: 14, marginTop: 34, borderRadius: 2}} onClick={() => removeFromCart(item.id)}>Remove</Button>
                </Box>
        </Card>
    )
}

export default CartItem