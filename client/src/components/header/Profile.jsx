import { useState } from "react"
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core"
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { Link } from "react-router-dom"

const useStyle = makeStyles({
    component: {
        marginTop: 40,
    },
    logout: {
        marginLeft: 15,
        fontSize: 15
    }
})
const Profile = ({ account, setAccount }) => {

    const classes = useStyle()

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const logout = () => {
        handleClose()
        setAccount('')
    }
    return (
        <>
            <Typography onClick={handleClick} style={{cursor: 'pointer'}}>{account}</Typography>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
                >
                <MenuItem onClick={logout}><PowerSettingsNewIcon fontSize='small' color='primary'/>
                <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
                </Menu>
                
        </>
    )
}

export default Profile