import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getProductDetails } from "../../redux/actions/ProductAction"
import { useParams } from 'react-router-dom'
import { makeStyles, Box, Typography, Table, TableBody, TableRow, TableCell, Grid } from '@material-ui/core'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import clsx from 'clsx'
import ActionItem from "./ActionItem"



const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        backgroundColor: '#f2f2f2'
    },
    container: {
        //margin: '0px 80px',
        background: '#fff',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
            flexDirection: 'column'
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 8px'
        }
    },
    smalltext: {
        fontSize: 14,
        '& > *': {
            fontSize: 14,
            marginTop: 10,
            color: '#222'
        }
    },
    greyTextColor: {
        color: '#878787',
        verticalAlign: 'baseline'
    },
    priceText: {
        fontSize: 28
    },
    boldtext: {
        fontWeight: 600,
        '& > *': {
            fontWeight: 600,
        }
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00cc00'
    },
    availOffer: {
        marginTop: 20
    }

}))
const DetailView = () => {
    const classes = useStyle()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerUrl = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50'
    const date = new Date(new Date().getTime() + 5*24*60*60*1000)

    let { id } = useParams()
    
    const { product } = useSelector(state =>  state.getProductDetails)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetails(id))
        
    }, [dispatch])

     return (
        <Box className={classes.component}>
            {
                product && Object.keys(product).length &&
                <Grid className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smalltext, classes.greyTextColor)}>
                            8 Ratings & 2 Reviews
                            <span><img style={{width: 77, marginLeft: 15}} src={fassured}/></span>
                        </Typography>
                        <Typography>
                            <span className={classes.priceText}>₹{product.price.cost}</span> &nbsp; &nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp; &nbsp;
                            <span style={{color: '#388e3c'}}>{product.price.discount} off</span>
                        </Typography>
                        <Typography className={clsx(classes.boldtext, classes.availOffer)}>Available offers</Typography>
                        <Box className={classes.smalltext}>
                        <Typography><LocalOfferIcon className={classes.badge}/><span className={classes.boldtext}>Special Price</span> Get extra 30% off (price inclusive of discount)</Typography>
                        <Typography><LocalOfferIcon className={classes.badge}/><span className={classes.boldtext}>Bank Offer</span> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                        <Typography><LocalOfferIcon className={classes.badge}/><span className={classes.boldtext}>Bank Offer</span> 20% off on 1st txn with Amex Network Cards issued by ICICI Bank</Typography>
                        <Typography><LocalOfferIcon className={classes.badge}/><span className={classes.boldtext}>Bank Offer</span> 15% Instant discount on first Pay Later order of ₹500 and above</Typography>
                        </Box>
                        <Table>
                            <TableBody className={classes.boldtext}>
                                <TableRow>
                                    <TableCell className={clsx(classes.boldtext, classes.greyTextColor)}>Delivery</TableCell>
                                    <TableCell>{date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={clsx(classes.boldtext, classes.greyTextColor)}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={clsx(classes.boldtext, classes.greyTextColor)}>Seller</TableCell>
                                    <TableCell className={classes.smalltext}>
                                        <span style={{color: '#2874f0'}} >SuperCoinNet</span>
                                        <Typography>GST invoice available</Typography>
                                        <Typography>14 days return policy</Typography>
                                        <Typography>View more sellers starting from ₹300 </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}><img src={sellerUrl} style={{width: '390px'}} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={clsx(classes.boldtext, classes.greyTextColor)}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default DetailView