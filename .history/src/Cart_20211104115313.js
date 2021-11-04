import React from "react";

function Cart(props) {
const {cartItems} = props;
 

    return(
        <div id="Cart">
            <div classname="CartIcon"> {cartItems.length > 0 && <span>{cartItems.length}</span>}</div>
            {cartItems.map((Item, key) => (
                <div className="row">
                    <div className="col-md-1"><span onClick={() => onRemove(Item)} className="remove">X</span></div>
                    <div className="col-md-3"><img src={Item.image}/></div>
                    <div className="col-md-8">
                        <h3>{Item.name}</h3>
                        <button onClick={() => onAdd(Item)}>+</button>
                        <div>{Item.qty}</div>
                        <button onClick={() => onReduce(Item)}>-</button>
                        <b>${Item.price}</b>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Cart