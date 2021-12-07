import * as actionType from '../constants/cartConstant'

import axios from 'axios'


const url = 'http://localhost:8000'

export const addToCart = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${url}/product/${id}`)
        dispatch({type: actionType.ADD_TO_CART, payload: data})
    } 
    catch(error) {
        console.log('Error wile callling the api', error.message)
    }
}

export const removeItemFromCart = (id) => (dispatch) => {
    dispatch({type: actionType.REMOVE_FROM_CART, payload: id})
}

