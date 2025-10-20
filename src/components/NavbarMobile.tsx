import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';

import { NAV_ITEMS } from '../constants/others';

export const NavBarMobile = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');

      if (navIsOpen && hamburger && !hamburger?.contains(event.target) && !navMenu?.contains(event.target)) {
        setNavIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navIsOpen]);

  useEffect(() => {
    setNavIsOpen(false);
  }, [router.pathname]);

  return (
    <NavContainer>
      <div>
        <Hamburger onClick={() => setNavIsOpen(!navIsOpen)} className="hamburger">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </Hamburger>

        <NavItemsContainer className={navIsOpen ? 'open nav-menu' : 'hidden nav-menu'}>
          {NAV_ITEMS.map((item) => (
            <Link href={item.url} passHref key={item.title}>
              <NavItem className={router.pathname === item.url ? 'active' : ''}>{item.title}</NavItem>
            </Link>
          ))}
        </NavItemsContainer>
      </div>

      <ImageContainer className="logo">
        <Link href="/" passHref>
          <a style={{ display: 'flex' }}>
            <img src="/svg/aus-logo.svg" alt="aus logo" />
          </a>
        </Link>
        <CallAndQuoteContainer>
          <a href="tel:+610430188729">
            <div className="call">
              <BiPhoneCall />
              <div>
                <p className="call-text">CALL US NOW</p>
                <p className="call-number">0430188729</p>
              </div>
            </div>
          </a>
        </CallAndQuoteContainer>
      </ImageContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: none;
  padding: 5px 1.5%;
  position: sticky;
  top: 0;
  z-index: 4;
  background-color: white;

  @media (max-width: 1150px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  position: absolute;
  background-color: white;
  top: 50px;
  left: 0;
  z-index: 1;
  transition: height 0.2s linear;
  overflow: hidden;
  padding-left: 1.5%;
  border-bottom: 1px solid var(--green-primary-light);

  &.hidden {
    height: 0;
    transform-origin: top;
    pointer-events: none;
  }

  &.open {
    height: 281px;
    pointer-events: all;
  }
`;

const NavItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 5px 0;

  &:first-child {
    padding-top: 20px;
  }

  &:last-child {
    padding-bottom: 20px;
  }

  &.active {
    color: var(--green-primary);
  }
`;

const Hamburger = styled.div`
  cursor: pointer;

  div {
    width: 35px;
    height: 3px;
    background-color: var(--green-primary);
    margin: 6px 0;
    transition: transform 0.2s ease-in-out;
    pointer-events: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: row-reverse;

  img {
    height: 40px;
  }
`;

export const CallAndQuoteContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  div.call {
    display: flex;
    align-items: center;

    svg {
      font-size: 40px;
      fill: var(--green-primary);

      @media (max-width: 550px) {
        font-size: 35px;
      }
    }

    p.call-text {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      @media (max-width: 550px) {
        font-size: 12px;
      }
    }
    p.call-number {
      font-size: 18px;
      font-weight: 700;
      line-height: 20px;
      color: var(--green-primary);

      @media (max-width: 550px) {
        font-size: 16px;
      }
    }
  }
`;
