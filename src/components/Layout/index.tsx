import React from 'react';

import { ThemeProvider } from 'styled-components';

import Dark from '../../styles/themes/dark';
import GlobalStyle from '../../styles/global';

import Sidebar from '../Sidebar/Sidebar';

import styled from 'styled-components';

const Container = styled.div`
  margin-left: 200px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={Dark}>
        <GlobalStyle />
        <Sidebar />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

export default Layout;
