import { ReactNode } from 'react';
import styled from 'styled-components';

import { NavBar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NavBarMobile } from '../components/NavbarMobile';
import { ChatWidget } from '../components/ChatWidget';

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
      <ChatWidget />
    </>
  );
};

export default RootLayout;

const MainContainer = styled.main`
  overflow: hidden;
`;
