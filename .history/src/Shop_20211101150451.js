import React from "react";
import { Products } from "./Data";


class Shop extends React.Component {
    render() {
        return (
            <div className="my-shop">
                <h1>My shop</h1>
<div className="container">
                    {Products.map((data, key) => {
                        return (
                            <div key={key}>
                                {data.name +
                                    " , " +
                                    data.image +
                                    " ," +
                                    data.price +
                                    ", " +
                                    data.description}
                            </div>
                        );
                    })}

</div>
            </div>
        );
    }
}
export default Shop;
