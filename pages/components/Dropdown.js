import React from 'react'

const Dropdown = (props) => {
   return (
      <>
         <div className="dropdown w-full my-4">
            <button tabIndex="0" className="text-white py-2 px-3 rounded-lg  w-full flex items-center justify-between bg-themeGray h-9">
               {props.title}

               <span>i</span>
            </button>
            <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
               <li>
                  <a>Item 1</a>
               </li>
               <li>
                  <a>Item 2</a>
               </li>
               <li>
                  <a>Item 3</a>
               </li>
            </ul>
         </div>
      </>
   )
}

export default Dropdown
