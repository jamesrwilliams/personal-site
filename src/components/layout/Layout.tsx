import React, {FC, PropsWithChildren} from 'react';
import styled from 'styled-components';
import { Header, Footer } from '../../components';
import GlobalStyles from '../../theme/globalStyles';

const LayoutContainer = styled.div`
  padding: 0;
  height: 100%;
`;

export const Layout: FC<PropsWithChildren> = ({children}) => (
  <LayoutContainer>
    <Header/>
    {children}
    <Footer/>
    <GlobalStyles/>
  </LayoutContainer>
);
