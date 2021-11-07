import React from "react";
import { useState, useEffect} from "react";
import Cart from "./Cart";
import ProductsJson  from "./Data.json";


export default function Shop() {
   
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });

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
        if (cartItems.length == 1) {
            setShowCart(false);
        }
        setCartItems(
            cartItems.filter((x) => x.id !== product.id )
        )
        console.log(cartItems.length);
        
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
      
    const ShowCart = () => {
        if (cartItems.length ) {
        setShowCart(true);
        }
    }
    const hideCart = () => {
            setShowCart(false);
    }
        return (
            <div className="my-shop">
                <div onClick={() => ShowCart(true)} className="CartIcon"> {cartItems.length > 0 && <span>{cartItems.length}</span>}</div>

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
                            <div className="inner-prod">
                                <form method="post" onSubmit={(e) => handleSubmit(product, e)}>
                                <div className="wrap-img">    
                                <img src={product.image} alt={product.name} />
                                </div>
                                <div className="wrap-content">
                                <h3>{product.name}</h3>
                                <div className="desc">{product.description}</div>
                                <div className="price">${product.price}</div>

                                <div className="wrap-input">
                                    <label>Quentity:</label>
                                    <input required  type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                                </div>
                              
                                    <input type="submit"  value="Add to cart"  />
                                    </div>

                                </form>
                                </div>
                                </div>
                        );
                    })}
                   </div>
                </div>
        );
    }


