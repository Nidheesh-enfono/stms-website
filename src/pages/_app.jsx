import 'focus-visible'
import '@/styles/tailwind.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
