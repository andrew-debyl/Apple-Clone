import Head from 'next/head'
import Header from '../components/Header'
import Landing from '@/components/Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apple Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing/>
      </main>
    </div>
  )
}
