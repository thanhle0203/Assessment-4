import axios from 'axios';

export const addProduct = (productDetails) => {
    return async dispatch => {
        try {
            const reponse = await axios.post('/api/products', productDetails);
        } catch (error) {
            console.error(error);
        }
    }
}