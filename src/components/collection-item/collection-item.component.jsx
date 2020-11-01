import React from 'react';

import {CollectionItemContainer,
ImageContainer,
CustomButtonContainer,
CollectionFooterContainer,
NameContainer,
PriceContainer} from  './collection-item.styles';

import {connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';


const CollectionItem=({item,addItem})=>{
    const { name,price,imageUrl}=item;
    return(
    <CollectionItemContainer>

        <ImageContainer className='image' imageUrl={imageUrl}
        />
            <CollectionFooterContainer>
                <NameContainer className='name'>{name}</NameContainer>
                <PriceContainer className='price'>{price}</PriceContainer>
            </CollectionFooterContainer>

      <CustomButtonContainer onClick={()=>addItem(item)} inverted>ADD TO CART</CustomButtonContainer>
    </CollectionItemContainer>
)};

const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);