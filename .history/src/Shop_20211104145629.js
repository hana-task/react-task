import React from "react";
import { useState } from "react";
import Cart from "./Cart";
import ProductsJson  from "./Data.json";


export default function Shop() {
   
        const [cartItems, setCartItems] = useState([]);
        const [showCart, setShowCart] = useState(false);

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
           setShowCart(true);
        }

    const onAdd =(product) =>{
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
      
    const hideCart = () => {

        setShowCart(false);
    }
        return (
            <div className="my-shop">
                <h1>My shop</h1>
                {showCart ?   <Cart cartItems={cartItems}
                    onAdd={onAdd}
                    onReduce={onReduce}
                    onRemove={onRemove}
                    hideCart={hideCart}
                /> : null }
                   <div className="row">
                    {ProductsJson.map(product => {
                    
                        return (
                        
                            <div className="col-md-4 prod" >
                                <form method="post" onSubmit={(e) => handleSubmit(product, e)}>
                                    <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <div className="desc">{product.description}</div>
                                <div className="price">${product.price}</div>

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


