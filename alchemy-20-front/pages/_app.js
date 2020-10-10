import { useEffect } from "react";
import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
