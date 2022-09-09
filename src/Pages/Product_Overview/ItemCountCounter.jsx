import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./ProductOverview.css"

export const ItemCountCounter=({ value, handleIncrement, handleDecrement })=>{
    return (
        <div>
            <p id="quantityPara">Quantity</p>
            <div className="itemCountAndBtnDiv">
              <div id="itemCountDiv">
                <button id="subBtn" onClick={handleDecrement}>-</button>
                <div id="showQuantityDiv">{value}</div>
                <button id="addBtn" onClick={handleIncrement}>+</button>
              </div>
              <div id="cartBtnDiv">
                 ADD TO CART
              </div>
            </div>
            <div className="addToFav">
              <FavoriteBorderIcon/>
              <p>Save To my Favorites</p>
            </div>
            <p id="quantityPara">In stock - Usually dispatched within 24 hours</p>
        </div>
    )
}

const ChildToParent = () => {
    const [count, setCount] = React.useState(0);
    const handleChange = (val) => {
      setCount(count + val); // 2
    };
  
    return (
      <div>
        <ItemCountCounter
          value={count}
          handleIncrement={() => handleChange(1)}
          handleDecrement={() => handleChange(-1)}
        />
      </div>
    );
  };