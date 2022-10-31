import '../styles/globals.css'
import Top from '../src/component/Top';
import InputFields from '../src/component/InputFields';
import Background__Btns from '../src/component/Background__Btns';
import Footer from '../src/component/Footer';
import Component__btns from '../src/component/\bComponents__btns';
import Text__style from '../src/component/text__style';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Top />
      <InputFields />
      <Background__Btns />
      <Component__btns />
      <Text__style />
      <Footer />
    </div>
  );
}

export default MyApp
