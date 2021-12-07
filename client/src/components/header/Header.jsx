import {AppBar, Toolbar, makeStyles, Typography, Box, IconButton, Drawer, List, ListItem, withStyles} from '@material-ui/core'
import {useState} from 'react'
import { Menu } from '@material-ui/icons'
import HeaderButton from './HeaderButton'
import {Link} from 'react-router-dom'

//components
import SearchBar from './SearchBar'

const useStyle = makeStyles((theme) => ({
    header: {
        background: "#2874f0",
        height: 65,
        boxSizing: 'unset',
        bottom: '0'
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4 
    },
    container: {
        display: "flex"
    },
    component: {
        marginLeft: "12%",
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    subHeading: {
        fontSize: 10,
        fontStyle: "italic"

    },
    plus: {
        color: "yellow"
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        paddingLeft: 0,
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    headerButton : {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        margin: '0 5% 0 auto'
    }
})) 

const ToolBar = withStyles({
    root: {
        minHeight: 65
    },
})(Toolbar)
const Header = () => {
    const classes = useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem Button>
                    <HeaderButton />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <AppBar position='fixed' className={classes.header}>
            <Toolbar>
                <IconButton 
                    className={classes.menuButton}
                    color='inherit' 
                    className={classes.menuButon}
                    onClick={handleOpen} >
                    <Menu className={classes.menuButton} />
                </IconButton>
                <Drawer open={open} onClose={handleClose}>
                   {list()}
                </Drawer>
                <Link to='/' className={classes.component}>
                    <Typography style={{color: '#fff', fontSize: 18, fontFamily: 'cursive', fontWeight: 600, fontStyle: 'italic'}}> Flexmart </Typography>
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box className={classes.plus} component="span"> plus </Box></Typography>
                        <img src={subURL} className={classes.subURL}/>
                    </Box>
                </Link>
                <SearchBar />
                <span className={classes.headerButton} ><HeaderButton/></span>
            </Toolbar>
        </AppBar>
    )
}

export default Header