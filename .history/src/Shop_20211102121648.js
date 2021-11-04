import React from "react";
//import { ProductsJson } from "./Data";


class Shop extends React.Component {
    render() {
        const ProductsJson = {
            "products": [
                {
                    "name": "Cap",
                    "image": './images/cap.jpg',
                    "price": "22",
                    "description": "Very nice red cap!",
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.jpg',
                    "price": "45",
                    "description": "Warming sweater",
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.jpg',
                    "price": "55",
                    "description": "Warming sweater2",
                },
                {
                    "name": "Cap",
                    "image": './images/cap.jpg',
                    "price": "22",
                    "description": "Very nice red cap!",
                },
                {
                    "name": "Sweater",
                    "image": './images/sweater.jpg',
                    "price": "45",
                    "description": "Warming sweater",
                },
                {
                    "name": "Sweater2",
                    "image": './images/sweater2.jpg',
                    "price": "55",
                    "description": "Warming sweater2",
                },
            ]
        };
        var stringified = JSON.stringify(ProductsJson);
        const Products = JSON.parse(stringified);
        console.log(Products);
        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <div className="container">
                   <div className="row">
                    {Products.products.map((data, key) => {
                        return (
                            <div className="col-md-4 prod" key={key}>
                                <image src={data.image} alt={data.name} />
                                <h3>{data.name}</h3>
                                <div className="desc">{data.description}</div>
                                <div className="price">{data.price}+"$"</div>
                                <input placeholder="Quantity" type="number" id="quantity" name="quantity" min="1" max="5" />
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
