import React from 'react';
import Beers from '../../assets/beers.jpg';
import './_beerCart.css';
import FlipCart from '../UI/_flipCart/_flipCart';
import Aux from '../../hoc/auxilary';
import Awards from '../_awards/_awards';



const beerCart = props => {
    const flipFront = ( 
        <div height={props.height} className="carousel-bar-block">
        <img src={Beers} alt="Piwo" />
            <div>
            <h2>{props.title} 
                <span>
                <b>{props.rate}</b>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </span>
            </h2>
            <p>{props.content} <b className="orange-link">Lagger</b>
            </p>
            </div>           
        </div> 
       
    );

    const flipBack = (
        <div className="cart-back-container">
            <Awards noHeader={true}/>
        </div>
    );
    return(
        <Aux>
            <FlipCart front={flipFront} back={flipBack}/>
        </Aux>
    );
    
};

export default beerCart;