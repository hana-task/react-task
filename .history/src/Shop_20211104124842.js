import React from "react";
import { useState ,useEffect} from "react";
import Cart from "./Cart";

//import { ProductsJson } from "./Data";


export default function Shop() {
   
        const ProductsJson = {
            "products": [
                {
                    "id" : 1,
                    "name": "Cap",
                    "image": 'https://www.avishagarbel.co.il/content/images/thumbs/0021017_-momwow-.jpeg',
                    "price": "22",
                    "description": "Very nice red cap!",
                    "qty" : 1
                },
                {
                    "id": 2,
                    "name": "Sweater",
                    "image": 'https://xxl.thumbs.canstockphoto.com/סוודר-הפרד-תמונה_csp2279401.jpg',
                    "price": "45",
                    "description": "Warming sweater",
                    "qty": 1
                },
                {
                    "id": 3,
                    "name": "Sweater2",
                    "image": 'https://xxl.thumbs.canstockphoto.com/סוודר-בחור-תמונות_csp0024608.jpg',
                    "price": "55",
                    "description": "Warming sweater2",
                    "qty": 1
                },
                {
                    "id": 4,
                    "name": "Cap",
                    "image": 'https://www.laline.co.il/media/catalog/product/cache/1/image/720x565/9df78eab33525d08d6e5fb8d27136e95/m/1/m10296999999.jpg',
                    "price": "22",
                    "description": "Warming brown cap",
                    "qty": 1
                },
                {
                    "id": 5,
                    "name": "Sweater3",
                    "image": 'https://xxl.thumbs.canstockphoto.com/סוודר-תמונות_csp5726468.jpg',
                    "price": "45",
                    "description": "Warming sweater",
                    "qty": 1
                },
                {
                    "id": 6,
                    "name": "Sweater4",
                    "image": 'https://xxl.thumbs.canstockphoto.com/סוודר-צילום-מניות_csp1011680.jpg',
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
            const exist = cartItems.find((x)=>x.id === product.id);
            if (exist){
                const newQty = qty + parseInt(exist.qty);
                
                setCartItems(
                    cartItems.map((x) => x.id === product.id ? { ...exist, qty: newQty} : x)
                )
            }else{

                setCartItems([...cartItems, { ...product, qty: qty}]);
            }
        }

    const onAdd =(product) =>{
       // const exist = cartItems.find((x) => x.id === product.id);
         setCartItems(
                cartItems.map((x) => x.id === product.id ? { ...x, qty: x.qty+1 } : x)
            )
        }
    const onRemove = (product) => {
        setCartItems(
            cartItems.filter((x) => x.id !== product.id )
        )
        }
    const onReduce = (product) =>{
            if (product.qty>1){
                setCartItems(
                    cartItems.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
                )
            }else{
                onRemove(product);
            }
        }
      

        return (
            <div className="my-shop">
                <h1>My shop</h1>
                <Cart cartItems={cartItems}
                    onAdd={onAdd}
                    onReduce={onReduce}
                    onRemove={onRemove}
                />
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
                                    <input required  type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                                </div>
                              
                                    <input type="submit"  value="Add to cart"  />

                                </form>
                                </div>
                        );
                    })}
                   </div>
                </div>
        );
    }


