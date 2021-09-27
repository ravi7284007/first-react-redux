import React from 'react';
import Header from './Header';

function Home(props){
    console.warn(props.cardData.length);
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-warpper">
                <div className="img-wrapper item">
                    <img src="https://www.freeiconspng.com/uploads/apple-iphone-x-pictures-5.png" alt=""/>
                </div>
                 <div className="text-wrapper item">
                    <span className="title">i-Phone</span>
                    <span className="price">Price : $1000</span>
                </div>
                 <div className="btn-wrapper item">
                    <button 
                    onClick={()=>
                    props.addToCartHander({price:1000, name: 'I Phone 11'})}>
                        Add to cart
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Home