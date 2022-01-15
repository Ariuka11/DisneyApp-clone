import Head from 'next/head'
import Header from '../components/Header.jsx'
import Slider from '../components/Slider.jsx'
import Brand from '../components/Brand.jsx'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
        <Slider/>
        <Brand/>
        
      </main>
    </div>
  )
}
