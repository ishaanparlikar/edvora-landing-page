import { React, useContext, useState } from 'react'
import Dropdown from './Dropdown'
import { Data } from '../pages'
import Select from 'react-select'
import _ from 'lodash';
import base from 'daisyui/dist/base';

const Sidebar = () => {
   // const products = useContext(Data)
   // console.log(products);
   const products = _.groupBy(useContext(Data), 'product_name');
   const city = _.groupBy(useContext(Data), 'address.city');
   const state = _.groupBy(useContext(Data), 'address.state');
   console.log(city);
   const options = Object.keys(products).map(product => ({
      value: product,
      label: product
   }))
   const optionsCity = Object.keys(city).map(city => ({
      value: city,
      label: city
   }))
   const optionsState = Object.keys(state).map(state => ({
      value: state,
      label: state
   }))


   // const [product, setProduct] = useState(null)
   // const [city, setCity] = useState(null)
   // const [state, setState] = useState(null)

   // const handleProductChange = (obj) => {
   //    setProduct(obj)
   //    setCity(obj.address)
   //    setState(obj.address)
   //    console.log(obj);
   // }
   const handleChange = (obj) => {
      console.log(obj);
   }
   const customStyles = {
      control: (base, state) => ({
        ...base,
        background: "#292929",
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        boxShadow: state.isFocused ? null : null
      }),
      menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
      }),
      menuList: base => ({
        ...base,
        padding: 0,
        background: "#292929",
      }),
      option: (base, state) => ({
         ...base,
         color: "white",
         "&:hover": {
            // Overwrittes the different states of border
            background: "#000",
          }
      }),
      singleValue: (base, state) => ({
         ...base,
         color: "white",
         color: state.isSelected ? "#000" : "#fff",
         "&:hover": {
            // Overwrittes the different states of border
            color: "white"
          }
      }),
      placeholder: (base, state) => ({
         ...base,
         color: "white",
         color: state.isSelected ? "#000" : "#fff",
      })
    };
   return (
      <>

         <div className="px-7 py-6 xl:w-60 bg-black rounded-xl max-h-80">


            <h2 className="card-title border-b border-b-gray-500 py-2 text-gray-300 font-light">Filter</h2>
            <div className='flex flex-col h-full items-center'>

               <Select styles={customStyles} onChange={handleChange}  className="w-full my-3 bg-themeGray" options={options} placeholder="Product" />
               <Select styles={customStyles}   onChange={handleChange} className="w-full my-3 bg-themeGray" options={optionsState} placeholder="State" />
               <Select styles={customStyles}  onChange={handleChange} className="w-full my-3 bg-themeGray" options={optionsCity} placeholder="City" />

            </div>

         </div>




      </>
   )
}

export default Sidebar
