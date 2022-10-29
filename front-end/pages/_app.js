import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Top />
      <Footer />
    </div>
  );
}

export default MyApp