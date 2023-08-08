import ClientOnly from '@/components/clientOnly';
import store from '@/state';
import '@/styles/globals.css';
import '@/styles/index.scss';
import customTheme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import ConfigHeader from './config-header';
import FetcherManager from './fetcher-manager';
import { NextPageWithLayout } from './page';
import ProviderManager from './providers-manager';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <ConfigHeader pageProps />
      <ChakraProvider theme={customTheme}>
        <ClientOnly>
          <Provider store={store}>
            <ProviderManager />
            <FetcherManager />
            {getLayout(<Component {...pageProps} />)}
            <Toaster position="top-center" reverseOrder={false} />
          </Provider>
        </ClientOnly>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
