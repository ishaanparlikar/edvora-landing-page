import { React, useContext } from 'react'
import Slider from './Slider'
import { Data } from '../pages';
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
         <h1 className="text-3xl text-white font-bold mb-4">Edvora</h1>
         <h2 className="text-xl text-gray-300 mb-4">Products</h2>
         <Slider data={arrayOfObj} />

      </>
   )


}

export default Products

