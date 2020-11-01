import React from 'react';

import {CartItemContainer, ImageContainer,ItemDetailsContainer,NameContainer} from './cart-item.styles';

const CartItem=({item:{imageUrl,price,name, quantity}})=>(
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <NameContainer >{name}</NameContainer>
<span >{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;