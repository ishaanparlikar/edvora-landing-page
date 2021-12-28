import React from 'react'

const Card = ({product}) => {
   // console.log(product);
   return (
      <>
         <div className="bg-themeGray p-3 rounded-lg">
            <div className="flex">
               <div>
                  <div className="avatar">
                     <div className="rounded-btn w-24 h-24">
                        <img src={product.image} />
                     </div>
                  </div>
                  <p className='text-gray-300 text-xs'>{product.address.city}</p>
               </div>

               <div className='flex ml-3 flex-col justify-between'>
                  <div className="">
                     <h3 className="text-md text-white">{product.product_name}</h3>
                     <p className="text-gray-300 text-sm">{product.brand_name}</p>
                     <small className="text-sm text-white">{product.price}</small>
                  </div>
                  <small className='text-gray-300 text-xs'>{(new Date(product.date)).toISOString().substring(0,10)}</small>
               </div>
            </div>
            <small className="text-gray-300 text-xs">{product.discription}</small>
         </div>
      </>
   )
}

export default Card
