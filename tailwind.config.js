module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme:
   {
      extend: {
         colors:{
            themeGray:'#292929'
         }
      },
   },
   plugins: [
      require('daisyui'),
    ],
    daisyui:{
       themes:false,
    }
}
