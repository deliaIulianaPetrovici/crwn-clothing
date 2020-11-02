import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';


import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../collection/collection.container';







const  ShopPage=({fetchCollectionsStart,match})=> {
 

  useEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart]);
 



    
    
    return (
      <div className='shop-page'> 
         <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
         <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
       </div>
  );

  }





const mapDispatchToProps = dispatch=>({
// fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
});



export default connect(null,mapDispatchToProps)( ShopPage);