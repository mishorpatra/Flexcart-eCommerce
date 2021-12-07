import {makeStyles, alpha, InputBase, List, ListItem} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'

import {getProducts as listProducts} from '../../redux/actions/ProductAction'

const useStyles = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: '75vh',
    backgroundColor: '#fff',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      width: '50vh'
    }
  
  },
  searchIcon: {
    marginLeft: 'auto',
    display: 'flex',
    padding: 5,
    color: 'blue'
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%'
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%'
  },
  list: {
    position: 'absolute',
    color: '#000',
    width: '75vh',
    background: '#fff',
    margin: '36px 0 0 10px',
    [theme.breakpoints.down('sm')]: {
      width: '50vh'
    }
  }
}))
const SearchBar = () => {
  const classes = useStyles()

  const [text, setText] = useState()
  const [open, setOpen] = useState(true)

  const getText = (text) => {
    setText(text)
    setOpen(false)
  }

  const getProducts = useSelector(state => state.getProducts)
  const { products } = getProducts
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div className={classes.search}>
            <InputBase
              placeholder="Search for Products, Brands and More"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
            <SearchIcon  />
            </div>
          </div>
      
      {
        text &&
          <List className={classes.list} hidden={open}>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem><Link onClick={() => setOpen(true)} style={{color: '#000', textDecoration: 'none'}} to={`/product/${product.id}`}>{product.title.longTitle}</Link></ListItem>
              ))
            }
          </List>
      }
    </div>
  )
}
export default SearchBar