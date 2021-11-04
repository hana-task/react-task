import React from "react";
//import { ProductsJson } from "./Data";


class Shop extends React.Component {
    render() {
        const ProductsJson = {
            "products": [
                {
                    "name": "Cap",
                    "image": './images/cap.png',
                    "price": "22",
                    "description": "Very nice red cap!",
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.png',
                    "price": "45",
                    "description": "Warming sweater",
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.png',
                    "price": "55",
                    "description": "Warming sweater2",
                },
                {
                    "name": "Cap",
                    "image": './images/cap.png',
                    "price": "22",
                    "description": "Very nice red cap!",
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.png',
                    "price": "45",
                    "description": "Warming sweater",
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.png',
                    "price": "55",
                    "description": "Warming sweater2",
                },
            ]
        };
        var stringified = JSON.stringify(ProductsJson);
        const Products = JSON.parse(stringified);
        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <div className="container">
                   <div className="row">
                    {Products.products.map((data, key) => {
                        const image = './images/sweater.png' ;
                        console.log(image);
                        const source = require('./images/sweater.png');
                        console.log(source);
                        return (
                            <div className="col-md-4 prod" key={key}>
                              <img src={source.default} alt={data.name} />
                                <h3>{data.name}</h3>
                                <div className="desc">{data.description}</div>
                                <div className="price">{data.price}$</div>
                                <input placeholder="Quantity" type="number" id="quantity" name="quantity" min="1"/>
                            </div>
                        );
                    })}
                   </div>
                </div>
            </div>
        );
    }
}
export default Shop;
