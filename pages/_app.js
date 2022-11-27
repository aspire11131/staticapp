import '../styles/globals.css'
import { Piazzolla } from '@next/font/google'

const piazolla = Piazzolla({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={piazolla.className}>
      <Component {...pageProps} />
    </main>
  )
}
