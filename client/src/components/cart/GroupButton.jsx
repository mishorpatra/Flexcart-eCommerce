import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import { useState } from 'react'


const useStyle = makeStyles({
    component: {
        marginTop: 30
    },
    button: {
        borderRadius: '50%'
    }
})

const GroupButton = () => {
    const classes = useStyle()
    const [counter, setCounter] = useState(1)
    const decrease = () => {
        setCounter(counter => counter-1)
    }
    const increase = () => {
        setCounter(counter => counter+1)
    }
    
    return (
        <ButtonGroup className={classes.component}>
            <Button onClick={() => decrease()} disabled={counter === 1} className={classes.button}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={() => increase()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}

export default GroupButton