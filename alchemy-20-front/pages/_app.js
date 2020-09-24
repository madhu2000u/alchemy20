import '../styles/globals.css'
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    document.documentElement.lang = 'en'
  }, [])
  
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
