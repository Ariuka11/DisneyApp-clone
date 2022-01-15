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
      <main>
        <Slider/>
        <Brand/>
      </main>
    </div>
  )
}
