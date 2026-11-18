import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import { useState } from "react";

function Product(props){
    const [qty, setQty] = useState (1);

    function calculateTotal(){
        let total = props.data.price * qty;
        return total;
    }

    function handleQtyChange(quantity){
        console.log(quantity);
        setQty(quantity);
    }

    function handleAdd(){
        props.onAdd({ ...props.data, quantity: qty})
    }

    // Calculate the Total Price using the data that we get from the QP
    return(
        <div className="product">
            <img src={"/images/" + props.data.image}></img>
            <h5>{props.data.title}</h5>
            <label>${props.data.price} </label>
            <label>${calculateTotal()} </label>
            <QuantityPicker onChange={handleQtyChange}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
export default Product;