import store from '../store'
import axios from 'axios'
/**
 * Create fetchAbout Action
 */
const requestProducts = () => {
    return {
        type: 'REQUEST_PRODUCTS',
    }
}

const receiveProducts = (data) => {
    return {
        type: 'RECEIVE_PRODUCTS',
        payload: data,
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(requestProducts())
        return axios.get('https://api.shop.com/AffiliatePublisherNetwork/v1/products?publisherID=TEST&locale=en_US&perPage=15&apikey=l7xxfd12f73ffc334821854269f62c5e2540')
            .then(response => response)
            .then(json => {
                dispatch(receiveProducts(json.data))
            })
    }
}