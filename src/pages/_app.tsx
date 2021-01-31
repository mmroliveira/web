import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';

import Dark from '../styles/themes/dark';
import GlobalStyle from '../styles/global';

import Sidebar from '../components/Sidebar/Sidebar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
