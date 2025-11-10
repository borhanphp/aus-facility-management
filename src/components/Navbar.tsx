import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { GetFreeQuote } from './GetFreeQuote';
import { NAV_ITEMS, SERVICES } from '../constants/others';

export const NavBar = () => {
  const router = useRouter();

  const [isMegaMenuActive, setIsMegaMenuActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target !== document.querySelector('.mega-menu')) {
        setIsMegaMenuActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <NavContainer>
      <Link href="/" passHref>
        <a>
          <div className="logo">
            <img src="/svg/aus-logo.svg" alt="aus logo" />
          </div>
        </a>
      </Link>

      <NavItemsContainer>
        {NAV_ITEMS.map((item) => (
          <NavItem
            className={item.url === router.pathname ? `${item.title} active` : `${item.title}`}
            onMouseEnter={() => setIsMegaMenuActive(item.title === 'Services')}
            key={item.title}
          >
            <Link href={item.url} passHref>
              <a>
                {item.title}
                {item.title === 'Services' && isMegaMenuActive && <MdOutlineKeyboardArrowUp size={25} />}
                {item.title === 'Services' && !isMegaMenuActive && <MdOutlineKeyboardArrowDown size={25} />}
              </a>
            </Link>

            {item.title === 'Services' ? (
              <MegaMenu className={isMegaMenuActive ? 'active mega-menu' : 'mega-menu'}>
                {SERVICES.map((service) => {
                  return (
                    <Link href={service.link} key={service.name}>
                      <MegaMenuItem href={service.link}>
                        <img src={service.image} alt={service.name} />
                        <p>{service.name}</p>
                      </MegaMenuItem>
                    </Link>
                  );
                })}
              </MegaMenu>
            ) : null}
          </NavItem>
        ))}
      </NavItemsContainer>

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

        <VerticalDivider></VerticalDivider>

        <GetFreeQuote />
      </CallAndQuoteContainer>
    </NavContainer>
  );
};

export const NavContainer = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: calc((var(--nav-height-with-padding) - var(--nav-height)) / 2) 0;
  position: relative;
  z-index: 100;

  div.logo {
    height: var(--nav-height);
  }

  @media (max-width: 1440px) {
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;

const MegaMenuItem = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 25%;

  & > * {
    pointer-events: none;
  }

  &:hover {
    color: var(--green-primary);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    object-fit: cover;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
  }
`;

export const MegaMenu = styled.div`
  position: absolute;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 101;
  border: 1px solid var(--green-primary-light);
  width: 650px;
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;

  top: 40px;
  left: 0%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const NavItem = styled.div`
  font-size: 20px;
  font-weight: 600;
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  &.active {
    color: var(--green-primary);
  }

  &:hover {
    color: var(--green-primary-light);
  }

  &.Services {
    position: relative;
  }
`;

export const CallAndQuoteContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  div.call {
    display: flex;
    align-items: center;

    svg {
      font-size: 48px;
      fill: var(--green-primary);
    }

    p.call-text {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    p.call-number {
      font-size: 28px;
      font-weight: 700;
      line-height: 20px;
      color: var(--green-primary);
    }
  }

  button {
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0em;
    color: #fff;
    background-color: var(--green-primary);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--green-primary-deep);
    }
  }
`;

const VerticalDivider = styled.div`
  width: 1px;
  height: 31px;
  background-color: #e2e1de;
`;
