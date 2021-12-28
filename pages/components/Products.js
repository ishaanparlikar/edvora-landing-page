import { React, useContext } from 'react'
import Slider from './Slider'
import { Data } from '..'
import _ from 'lodash';

const Products = () => {
   const products = useContext(Data);
   
   const arrayOfObj = Object.keys(products).map(key =>(
      {
         product_name: key,
         product_details: products[key],
      }
   ));
//   console.log(arrayOfObj);
   return (
      <div>

         {

           Object.entries(products).map((product, index) => {
         
              return (
                 
                 <Slider key={index}  data={arrayOfObj}/>
              )
             })
         }

      </div>
   )


}

export default Products

