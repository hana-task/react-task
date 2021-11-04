import React from "react";

function Cart(props) {
    const { cartItems, onRemove, onAdd, onReduce, hideCart} = props;
    const totalPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0);
    
    return(
        <div id="Cart">
            <div className="closeCart" onClick={() => hideCart()}></div>
            {cartItems.map((Item, key) => (
                
                <div className="row cartItem">
                    <div className="col-3"><img src={Item.image} alt={Item.name}/></div>
                    <div className="col-7">
                        <h3>{Item.name}</h3>
                        <button onClick={() => onAdd(Item)}>+</button>
                        <span>{Item.qty}</span>
                        <button onClick={() => onReduce(Item)}>-</button>
                        <div className="price">${Item.price}</div>
                    </div>
                    <div className="col-1"><span onClick={() => onRemove(Item)} className="remove">X</span></div>

                </div>
              
            ))}
            <div className="total">
                Toatl: ${totalPrice}
            </div>
        </div>
    )
}
export default Cart