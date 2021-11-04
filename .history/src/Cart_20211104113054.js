import React from "react";

function Cart(props) {
const {cartItems} = props;
    return(
        <div id="Cart">
            <div> {cartItems}</div>
            {cartItems.map((Item, key) => {
                <div className="row">
                    <div className="col-md-3"><img src={Item.image}/></div>
                    <div className="col-md-9">
                        <h3>{Item.name}</h3>
                        <div>{Item.name}</div>
                        <b>{Item.price}</b>
                    </div>
                </div>
            })}
        </div>
    )
}
export default Cart