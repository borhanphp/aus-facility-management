import { ReactNode } from 'react';
import styled from 'styled-components';

import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NavBarMobile } from '../components/NavbarMobile';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <NavBarMobile />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default RootLayout;

const MainContainer = styled.main`
  overflow: hidden;
`;
