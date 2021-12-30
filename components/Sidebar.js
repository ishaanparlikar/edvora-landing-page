import { React, useContext, useState } from 'react'
import Dropdown from './Dropdown'
import { Data } from '../pages'
import Select from 'react-select'
import _ from 'lodash';
import base from 'daisyui/dist/base';

const Sidebar = () => {

   //function to group the data
   const groupBy = (data, filterName) => {
      return _.groupBy(data, filterName);
   }
   const products = groupBy(useContext(Data), 'product_name')
   const city = groupBy(useContext(Data), 'address.city')
   const state = groupBy(useContext(Data), 'address.state')

   const [productObj, setProduct] = useState(null)

   //Function to map the options for select
   const objNew = (val) => {
      return (
         Object.keys(val).map(product => ({
            value: product,
            label: product
         }))
      )
   }

   const options = objNew(products)
   const optionsCity = objNew(city)
   const optionsState = objNew(state)

   const [cityObj, setCity] = useState(optionsCity)
   const [stateObj, setState] = useState(optionsState)

   const handleChange = (selectedOption) => {
      setProduct(selectedOption)

      const filtered = _.filter(products[selectedOption.value], (product) => {
         return product.address.state
      })

      //return object of filtered products
      const filteredCity = _.groupBy(filtered, 'address.city');
      const filteredState = _.groupBy(filtered, 'address.state');

      setState(objNew(filteredState))
      setCity(objNew(filteredCity))
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
         color: state.isSelected ? "white" : "white",
         background: state.isSelected ? "#292929" : "#292929",
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

               <Select
                  styles={customStyles}
                  onChange={handleChange}
                  className="w-full my-3 bg-themeGray text-black"
                  options={options}
                  placeholder="Product"
               />
               <Select
                  styles={customStyles}
                  onChange=''
                  className="w-full my-3 bg-themeGray text-black"
                  options={stateObj}
                  placeholder="State"
               />
               <Select
                  styles={customStyles}
                  onChange=''
                  className="w-full my-3 bg-themeGray text-black"
                  options={cityObj}
                  placeholder="City"
               />

            </div>

         </div>




      </>
   )
}

export default Sidebar
