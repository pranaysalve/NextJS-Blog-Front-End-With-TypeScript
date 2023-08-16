import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'components/nav'
import Footer from 'components/footer'
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='container mx-auto font-sans'>
      <NextNProgress color="#53bd95"/>
      <Navbar />
      <main className='pb-32'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
