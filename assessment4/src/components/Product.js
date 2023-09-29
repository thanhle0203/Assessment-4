//3. Create a product component using functional component and hooks (try using use state to read default values from reducer)
// 	 Create a form to allow user to submit Product Details - name, price, desc, rating
// 	 Create an action method to add the detail to database using a server api
// 	 Server Side - Create product router and api to save the product using productdatamodel

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions';
import productReducer from '../reducers/productReducer';

const Product = () => {
    const dispatch = useDispatch();
    const defaultValues = useSelector(state => state.productReducer.defaultValues);
    // const [productDetails, setProductDetails] = useState(defaultValues);
    const [productDetails, productDispatch ] = userReducer(productReducer, defaultValues);

    useEffect(() => {
      productDispatch({ type: 'RESET', payload: defaultValues });
    }, [defaultValues])
    

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct(productDetails));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // setProductDetails({ ...productDetails, [name]: value});
        productDispatch({ type: 'SET_FIELD', field: name, value});
    }

    return (
        <div>
            <h1>Product Component</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={productDetails.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="price"
                    value={productDetails.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="desc"
                    value={productDetails.desc}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <input
                    type="text"
                    name="rating"
                    value={productDetails.rating}
                    onChange={handleChange}
                    placeholder="Rating"
                />
                <button type='submit'>Add Product</button>

            </form>
        </div>
        
    );
};

export default Product;

