import { imageURL } from "../../constant/data";
import { Box, makeStyles, Grid } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    corona: {
        marginTop: 20,
        width: '100%',
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}))
const MidSection = () => {
    const classes = useStyle()
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} md={12} sm={12} xs={12} container className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xm={12}>
                        <img src={image} style={{width: '100%'}} />
                        </Grid>
                    ))
                }
            </Grid>
            <img className={classes.corona} src={coronaURL} />
        </>
    )
}

export default MidSection