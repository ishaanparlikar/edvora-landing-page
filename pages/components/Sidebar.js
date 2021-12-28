import React from 'react'
import Dropdown from './Dropdown'

const Sidebar = () => {
   return (
      <>

         <div className="px-7 py-6 w-60 bg-black rounded-xl">


            <h2 className="card-title border-b border-b-gray-500 py-2 text-gray-300 font-light">Filter</h2>
            <div className='flex flex-col h-full justify-evenly'>

               <Dropdown title="Products" />
               <Dropdown  title="State" />
               <Dropdown  title="City"/>
            </div>

         </div>




      </>
   )
}

export default Sidebar
