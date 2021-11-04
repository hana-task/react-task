import React from "react";

function Cart(props) {
    const { cartItems, onRemove, onAdd, onReduce, hideCart} = props;
    const totalPrice = cartItems.reduce((a,c)=> a + c.price * c.qty,0);
    
    return(
        <div id="Cart">
            <div className="closeCart" onClick={() => hideCart()}>X</div>
            <div classname="CartIcon"> {cartItems.length > 0 && <span>{cartItems.length}</span>}</div>
            {cartItems.map((Item, key) => (
                <div class="wrapper">
                <div className="row">
                    <div className="col-md-1"><span onClick={() => onRemove(Item)} className="remove">X</span></div>
                    <div className="col-md-3"><img src={Item.image} alt={Item.name}/></div>
                    <div className="col-md-8">
                        <h3>{Item.name}</h3>
                        <button onClick={() => onAdd(Item)}>+</button>
                        <span>{Item.qty}</span>
                        <button onClick={() => onReduce(Item)}>-</button>
                        <b>${Item.price}</b>
                    </div>
                </div>
                <div className="row totatl">
                        <b>Toatl:</b> ${totalPrice}
                </div>
                </div>
            ))}
        </div>
    )
}
export default Cart