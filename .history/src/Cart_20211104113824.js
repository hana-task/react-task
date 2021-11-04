import React from "react";

function Cart(props) {
const {cartItems} = props;
    console.log('cartItems');
    console.log(cartItems);

    return(
        <div id="Cart">
            <div> {cartItems.length}</div>
            {Object.keys(cartItems).forEach((Item) => {
                <div className="row">
              Item Cart
                </div>
            })}
        </div>
    )
}
export default Cart