import React from "react";
import { useState } from "react";
import Cart from "./Cart";

//import { ProductsJson } from "./Data";


function Shop() {
   
        const ProductsJson = {
            "products": [
                {
                    "id" : 1,
                    "name": "Cap",
                    "image": './images/cap.png',
                    "price": "22",
                    "description": "Very nice red cap!",
                    "qty" : 1
                },
                {
                    "id": 2,
                    "name": "Sweater",
                    "image": './images/sweater.png',
                    "price": "45",
                    "description": "Warming sweater",
                    "qty": 1
                },
                {
                    "id": 3,
                    "name": "Sweater2",
                    "image": './images/sweater2.png',
                    "price": "55",
                    "description": "Warming sweater2",
                    "qty": 1
                },
                {
                    "id": 4,
                    "name": "Cap",
                    "image": './images/cap.png',
                    "price": "22",
                    "description": "Very nice red cap!",
                    "qty": 1
                },
                {
                    "id": 5,
                    "name": "Sweater",
                    "image": './images/sweater.png',
                    "price": "45",
                    "description": "Warming sweater",
                    "qty": 1
                },
                {
                    "id": 6,
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

        const handleSubmit = (product, event) => {
            event.preventDefault();
            const qty = parseInt(event.target[0].value);
            console.log(product);
            const exist = cartItems.find((x)=>x.id == product.id);
            if (exist){
                setCartItems(
                    cartItems.map((x) => x.id == product.id ? { ...exist, qty: parseInt(exist.qty) + qty} : x)
                )
            }else{
                setCartItems([...cartItems, { ...product, qty: qty}]);
            }
            console.log(cartItems);
        }
        const handleChange = (product, event) => {
            event.preventDefault();
            product.qty = event.target.value;

        }

        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <Cart cartItems={cartItems} />
                   <div className="row">
                    {Products.products.map((product, key) => {
                        const image = './images/sweater.png' ;
                        const source = require('./images/sweater.png');
                        return (
                            

                            <div className="col-md-4 prod" key={key}>
                                <form onSubmit={(e) => handleSubmit(product, e)}>
                              <img src={source.default} alt={product.name} />
                                <h3>{product.name}</h3>
                                <div className="desc">{product.description}</div>
                                <div className="price">{product.price}$</div>

                                <div className="wrap-input">
                                    <label>Quentity:</label>
                                    <input required  type="number" id="quantity" name="quantity" min="1" defaultValue="1" onChange={(e) => handleChange(product, e)}/>
                                </div>
                                    <input type="submit" value="Add to cart" />

                                </form>
                                </div>
                        );
                    })}
                   </div>
                </div>
        );
    }

export default Shop;
