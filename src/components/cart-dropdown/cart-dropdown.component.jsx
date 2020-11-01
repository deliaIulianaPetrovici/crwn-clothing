import React from 'react';

import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {CartDropDownContainer,CartItemsContainer,EmptyMessageContainer,CustomButtonContainer} from './cart-dropdown.styles.jsx';

import CartItem from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toogleCartHidden} from '../../redux/cart/cart.actions';

const CartDropDown=({cartItems,history,dispatch})=>(
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
              (  cartItems.map(cartItem=>(
                     <CartItem key={cartItem.id} item={cartItem}/>
                     )
                     ))
                     :
                    ( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
            }
        </CartItemsContainer>

        <CustomButtonContainer onClick={()=>{ 
            history.push('/checkout');
            dispatch(toogleCartHidden());
    }}> GOT TO CHECKOUT</CustomButtonContainer>

    </CartDropDownContainer>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));