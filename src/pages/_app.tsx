import type { AppProps } from 'next/app';
import { ToastContainer, Slide } from 'react-toastify';

import RootLayout from '../layouts/RootLayout';

import '../styles/main.scss';
import '../styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;

  return (
    <RootLayout>
      <Component {...pageProps} key={router.route} />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
        transition={Slide}
      />
    </RootLayout>
  );
}

export default MyApp;
