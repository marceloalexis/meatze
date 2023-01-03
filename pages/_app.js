import App from 'next/app'
import dynamic from 'next/dynamic'
import { MainProvider } from '../contexts/Main.context.js'
import {AnimatePresence} from 'framer-motion'


import 'normalize.css'
import '../bemit/bemit.scss'

function MyApp({ Component, pageProps, router }) {
  return (
     <MainProvider>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} key={router.asPath}/>
      </AnimatePresence>
      </MainProvider>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//


export default MyApp