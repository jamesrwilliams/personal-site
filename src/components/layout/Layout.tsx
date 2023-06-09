import React, {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GlobalStyles from '../../theme/globalStyles';

const LayoutContainer = styled.div`
  padding: 0;
  height: 100%;
`;

const Layout: FC<PropsWithChildren> = ({children}) => (
  <LayoutContainer>
    <Header/>
    {children}
    <Footer/>
    <GlobalStyles/>
  </LayoutContainer>
);

export default Layout;
