import "../app/globals.css"; // Import global styles
import Layout from "../app/layout"; // Import layout

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
