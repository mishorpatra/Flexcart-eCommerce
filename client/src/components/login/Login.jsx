import { Dialog, DialogContent, makeStyles, Box, Typography, TextField,Button } from "@material-ui/core"
import { useState } from "react"
import { authenticateSignup, authenticateLogin } from "../../service/api"



const useStyle = makeStyles({
    component : {
        height: '70vh',
        width: '90vh'
    },
    image: {
        background: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#fff',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        '& > *': {
            marginTop: '20px'
        }
    },
    signup: {
        padding: '15px 35px 25px',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        '& > *': {
            marginTop: '5px'
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        backgroundColor: '#fb641b',
        color: 'white',
        height: 48,
        borderRadius: 2
    },
    signupBtn: {
        textTransform: 'none',
        backgroundColor: '#fb641b',
        color: 'white',
        height: 45,
        borderRadius: 2,
        marginTop: 20
    },
    requestBtn: {
        textTransform: 'none',
        backgroundColor: '#fff',
        color: '#2874f0',
        height: 45,
        borderRadius: 2,
        marginTop: 20,
        boxShadow: '0px 2px 4px 0px rgb(0 0 0 / 20%)'
    },
    createNew: {
        textAlign: 'center',
        marginTop: 'auto',
        color: '#2874f0',
        fontSize: 14,
        cursor: 'pointer',
        fontWeight: 600
    },
    inputField: {
        size: 'small'
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginTop: 0,
        fontWeight: 600
    }

})

const signupInitialValue = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    mobile: ''
}
const loginInitialValue = {
    username: '',
    password: ''
}

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Order, Wishlist and Recomendation'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subHeading: 'Sign up with your mobile number to get started'
    },
}

const LoginDialog = ({open, setOpen, setAccount}) => {
    const classes = useStyle()

    const [account, setUserAccount] = useState(initialValue.login)
    const [signup, setSignup] = useState(signupInitialValue) 
    const [login, setLogin] = useState(loginInitialValue)
    const [error, setError] = useState(false)
    
    const toggleAccountOfLogin = () => {
        setUserAccount(initialValue.signup)   
    }
    const toggleAccountOfSignup = () => {
        setUserAccount(initialValue.login)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup)
        if(!response) return
        handleClose()
        setAccount(signup.username)
    }
    const loginUser = async () => {
        let response = await authenticateLogin(login)
        if(!response) {
            setError(true)
            return
        }
        handleClose()
        setAccount(login.username)
    }
    const onInputChange = (e) => {
         setSignup({...signup, [e.target.name]:e.target.value})
         
    }
    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
        console.log(login)
    }
    
    return (  
        <Dialog open={open} onClose={handleClose} >
             <DialogContent className={classes.component}>
                <Box style={{display: 'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading} </Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Username' />
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Password' />
                            {error && <Typography className={classes.errorText}>Invalid Username or Password</Typography>}
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button onClick={() => loginUser()} variant='contained' className={classes.loginBtn}> Login </Button>
                            <Typography style={{textAlign: 'center'}} className={classes.text}>OR</Typography>
                            <Button variant='contained' className={classes.requestBtn} >Request OTP</Button>
                            <Typography onClick={() => toggleAccountOfLogin()} className={classes.createNew}>New to flipkart? create an account</Typography>
                        </Box> :
                        <Box className={classes.signup}>
                            <TextField  onChange={(e) => onInputChange(e)} name='firstname' label='First Name' />
                            <TextField  onChange={(e) => onInputChange(e)} name='lastname' label='Last Name' />
                            <TextField  onChange={(e) => onInputChange(e)} name='email' label='Email' />
                            <TextField  onChange={(e) => onInputChange(e)} name='username' label='Username' />
                            <TextField  onChange={(e) => onInputChange(e)} name='password' label='password' />
                            <TextField  onChange={(e) => onInputChange(e)} name='mobile' label='Mobile' />
                            <Button onClick={() => signupUser()} variant='contained' className={classes.signupBtn}> Sign Up </Button>
                            <Typography onClick={() => toggleAccountOfSignup()}  className={classes.createNew}>Already have an account? Login</Typography>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog