import { React, useContext } from 'react'
import Slider from './Slider'
import { Data } from '..'
import _ from 'lodash';

const Products = () => {
   const products = _.groupBy(useContext(Data), 'product_name');

   const arrayOfObj = Object.keys(products).map(key => (
      {
         product_name: key,
         product_details: products[key],
      }
   ));
   //   console.log(products);
   return (
      <>
         <Slider data={arrayOfObj} />

      </>
   )


}

export default Products

