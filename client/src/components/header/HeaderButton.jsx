import { useState, useContext } from 'react'
import {Box, Button, Typography, Badge} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

// components
import LoginDialog from '../login/Login'
import { LoginContext } from '../../context/ContextProvider'
import Profile from  './Profile'

const useStyles = makeStyles(theme => ({
    wrapper: {
        margin: '0 5% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#fff'
        },
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            '& > *': {
                color: '#2874f0',
                marginTop: 10,
            }
        }
    },
    login : {
        background: '#fff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        padding: '5px 40px',
        borderRadius: 2,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            color: '#fff',
            background: '#2874f0'
        }
    },
    container: {
        display: 'flex',
    }

}))


const HeaderButton = () => {
    const [ open, setOpen ] = useState(false)
    const classes = useStyles()
    const { account, setAccount } = useContext(LoginContext);
    const { cartItems } = useSelector(state => state.cart)

    const openLoginDialog = () => {
        setOpen(true)
    }
    
    return (
        <Box className={classes.wrapper}>
        {   account ? <Profile account={account} setAccount={setAccount} /> :
            <Button variant="contained" className={classes.login} onClick={() => openLoginDialog()}>Login</Button>
        }
            <Typography>More</Typography>
            <Link to='/cart' className = {classes.container}>
            <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCartIcon className={classes.black} />
            <Typography className={classes.black} >Cart</Typography>
            </Badge>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButton