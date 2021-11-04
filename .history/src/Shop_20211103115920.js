import React from "react";
import { useState } from "react";
import Cart from "./Cart";

//import { ProductsJson } from "./Data";


function Shop() {
   
        const ProductsJson = {
            "products": [
                {
                    "name": "Cap",
                    "image": './images/cap.png',
                    "price": "22",
                    "description": "Very nice red cap!",
                    "qty" : 1
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.png',
                    "price": "45",
                    "description": "Warming sweater",
                    "qty": 1
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.png',
                    "price": "55",
                    "description": "Warming sweater2",
                    "qty": 1
                },
                {
                    "name": "Cap",
                    "image": './images/cap.png',
                    "price": "22",
                    "description": "Very nice red cap!",
                    "qty": 1
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.png',
                    "price": "45",
                    "description": "Warming sweater",
                    "qty": 1
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.png',
                    "price": "55",
                    "description": "Warming sweater2",
                    "qty": 1
                },
            ]
        };
        const [cartItems, setCartItems] = useState([]);
        var stringified = JSON.stringify(ProductsJson);
        const Products = JSON.parse(stringified);

        const handleSubmit = (data, event) => {
           event.preventDefault();
            console.log(data);
        }
        const handleChange = (data, event) => {
            event.preventDefault();
            data.qty = event.target.value;

        }

        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <Cart cartItems={cartItems} />
                   <div className="row">
                    {Products.products.map((data, key) => {
                        const image = './images/sweater.png' ;
                        const source = require('./images/sweater.png');
                        return (
                            

                            <div className="col-md-4 prod" key={key}>
                                <form onSubmit={(e) => handleSubmit(data, e)}>
                              <img src={source.default} alt={data.name} />
                                <h3>{data.name}</h3>
                                <div className="desc">{data.description}</div>
                                <div className="price">{data.price}$</div>

                                <div className="wrap-input">
                                    <label>Quentity:</label>
                                    <input required  type="number" id="quantity" name="quantity" min="1" defaultValue="1" onChange={(e) => handleChange(data, e)}/>
                                </div>
                                    <input type="submit" value="Add to cart" />

                                </form>
                                </div>
                        );
                    })}
                   </div>
                </div>
            </div>
        );
    }

export default Shop;
