import '@/styles/globals.css'
import { FetchedDataWrapper } from '@/context/fetched-data'

function MyApp({ Component, pageProps }) {
  return (
    <FetchedDataWrapper>
      <Component {...pageProps} />
    </FetchedDataWrapper>
  )
}

export default MyApp
