import ClientOnly from '@/components/clientOnly';
import store from '@/state';
import '@/styles/globals.css';
import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Provider } from 'react-redux';
import ConfigHeader from './config-header';
import FetcherManager from './fetcher-manager';
import { NextPageWithLayout } from './page';
import ProviderManager from './providers-manager';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <ConfigHeader pageProps />
      <ClientOnly>
        <Provider store={store}>
          <ProviderManager />
          <FetcherManager />

          <SkeletonTheme baseColor="#0f0f0f" highlightColor="#898989">
            {getLayout(<Component {...pageProps} />)}
          </SkeletonTheme>

          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </ClientOnly>
    </>
  );
}

export default MyApp;
