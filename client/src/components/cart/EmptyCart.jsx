import {Box, makeStyles, Button, Typography} from '@material-ui/core'
import {useNavigate} from 'react-router-dom' 

const useStyle = makeStyles({
    container: {
        textAlign: 'center',
        paddingTop: 30,
    },
    component: {
        margin: '80px 140px',
        width: '80%',
        height: '65vh',
        backgroundColor: 'fff',
        
    },
    image: {
        width: '25%',
        marginTop: 10,
    },
})




const EmptyCart = () => {
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle()
    const navigate = useNavigate()
    const addItems = () => {
        navigate('/')
    }
    return (
        <Box className={classes.container}>
            <Box className={classes.component} >
                <img className={classes.image}  src={emptycarturl} />
                <Typography style={{marginTop: 10, fontWeight: 600}}>Your cart is empty !</Typography>
                <Typography style={{fontSize: 14}}>Add items to it</Typography>
                <Button variant='contained' onClick={() => addItems()} style={{background: '#2874f0', color: 'white', marginTop: 15, width: '180px', borderRadius: '2px', height: '50px'}}>Shop now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart