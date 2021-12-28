import Head from 'next/head'
import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Slider from './components/Slider'


export default function Home() {
   return (
      <div>
         <Head>
            <title>Edvora Product Landing Page</title>
            <meta name="description" content="Generated by create next app" />
         </Head>

         <main className='min-h-screen container py-8 px-4 mx-auto'>
            <Sidebar/>
            <Slider/>
         </main>
      </div>
   )
}
