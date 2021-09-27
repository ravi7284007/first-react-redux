import React from 'react';

function Header(props){
    // console.warn(props.cardData.length);
    return(
        <div>
            <div className="add-to-cart">
                <span className="countData">{props.cardData.length}</span>
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"/>
            </div>
        </div>
    )
}

export default Header