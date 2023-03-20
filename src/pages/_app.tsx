import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Quicksand } from 'next/font/google';
import { Provider } from 'react-redux';
import store from '../store';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Set Quicksand as global font family */}
      <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily};
        }
      `}</style>

      {/* App */}
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
