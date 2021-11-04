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
        var stringified = JSON.stringify(ProductsJson);
        const Products = JSON.parse(stringified);

        const handleSubmit = (data, event) => {
            event.preventDefault();
             console.log(event.target.value);
            console.log(data);
        }
        const handleChange = (data, event) => {
            event.preventDefault();
            console.log(event.target.value);
            data.qty = event.target.value;
            console.log(data);


        }
        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <div className="container">
                   <div className="row">
                    {Products.products.map((data, key) => {
                        const image = './images/sweater.png' ;
                        const source = require('./images/sweater.png');
                        return (
                            

                            <div className="col-md-4 prod" key={key}>
                                <form onSubmit={(e) => handleChange(data, e)}>
                              <img src={source.default} alt={data.name} />
                                <h3>{data.name}</h3>
                                <div className="desc">{data.description}</div>
                                <div className="price">{data.price}$</div>
                                    <input placeholder="Quantity" type="number" id="quantity" name="quantity" min="1"  onChange={(e) => handleChange(data, e)}/>
                                    <input type="submit" value="Add to cart"/>
                                </form>
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
