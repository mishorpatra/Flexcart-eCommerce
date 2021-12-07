import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constant/data'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles(theme => ({
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            height: 180,
            objectFit: 'cover'
        }
    },
    carousel: {
        paddingTop: 10
    }
}))
const Banner = () => {
    const classes = useStyle()
    return (
        <Carousel 
        autoPlay={true}
        animation='slide'
        interval={3000}
        indicators={false}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
            style: {
                background: '#fff',
                color: '#111',
                borderRadius: 0,
                margin: 0,
            }
        }}
        className={classes.carousel}
        >
                {
                    bannerData.map( (image) => (
                    <img src={image} className={classes.image} /> ))
                }
            </Carousel>
    )
}

export default Banner