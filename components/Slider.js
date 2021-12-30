import { React, useContext } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Card from './Card';
import axios from 'axios';
const Slider = ({ data }) => {
   // console.log(data)

   return (
      <>

         <div className=''>
            {data.map((product, index) => {
               // console.log(product);
               return (
                  <>
                  <h1 className='text-white py-2 border-b border-b-gray-400'>{product.product_name}</h1>

                  <Splide
                     key={index}
                     options={{
                        gap: '1.2rem',
                        perPage: '4',
                        pagination: false,
                        width: '1200px',
                        breakpoints:{
                           600: {
                              perPage: '1',
                           },
                           900: {
                              perPage: '2',
                           },
                        }
                     }}
                     className="bg-black p-6 rounded-xl my-3"
                     >
                     {product.product_details.map((product, index) => {
                        return (
                           
                           <SplideSlide key={index}>
                              <Card key={index} product={product} />
                           </SplideSlide>
                        )
                     })}
                  </Splide>

                     </>

               )
            })}
         </div>
      </>
   )
}

export default Slider
