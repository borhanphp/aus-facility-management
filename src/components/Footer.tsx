import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { GetFreeQuote } from './GetFreeQuote';
import { NAV_ITEMS, SERVICES } from '../constants/others';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

const SOCIAL_ITEMS = [
  {
    icon: <FiFacebook />,
    url: 'https://www.facebook.com/profile.php?id=61568755314283&mibextid=JRoKGi',
  },
  {
    icon: <FiInstagram />,
    url: 'https://instagram.com/aus_facilitymanagement/',
  },
  {
    icon: <FiYoutube />,
    url: 'https://youtube.com/aus',
  },
  {
    icon: <FaWhatsapp />,
    url: 'https://wa.me/5456634342',
  },
];

export const Footer = () => {
  return (
    <footer>
      <FooterHeader>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>Ready to get your services now?</motion.h2>
        <GetFreeQuote index={1} />
      </FooterHeader>

      <FooterBody>
        <LogoContainer>
          <motion.img {...FADE_IN_WHILE_IN_VIEW({ as: motion.img })} src="/svg/aus-logo.svg" alt="aus logo" />
          <div>
            {SOCIAL_ITEMS.map((item, index) => (
              <motion.a
                {...FADE_IN_WHILE_IN_VIEW({ index: index + 1, as: motion.a })}
                href={item.url}
                key={item.url}
                aria-label={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </LogoContainer>

        <LinksContainer>
          <div className="company-links">
            <motion.h3 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h3 })}>Company</motion.h3>

            <div className="links-list">
              {NAV_ITEMS.map((item, index) => (
                <Link href={item.url} passHref key={item.title}>
                  <motion.a {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.a })}>{item.title}</motion.a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <motion.h3 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h3 })}>Services</motion.h3>
            <div className="links-list">
              {SERVICES.slice(0, 3).map((service, index) => (
                <Link href={service.link} passHref key={service.link}>
                  <motion.a {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.a })}>{service.name}</motion.a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="placeholder">&nbsp;</h3>
            <div className="links-list">
              {SERVICES.slice(3).map((service, index) => (
                <Link href={service.link} passHref key={service.link}>
                  <motion.a {...FADE_IN_WHILE_IN_VIEW({ index: index + 5, as: motion.a })}>{service.name}</motion.a>
                </Link>
              ))}
            </div>
          </div>
        </LinksContainer>
      </FooterBody>
    </footer>
  );
};

const FooterBody = styled.div`
  padding: 80px 72px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1200px) {
    padding: 40px 1.5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--green-primary);
  color: white;
  height: 186px;
  padding: 0 100px;

  @media (max-width: 1200px) {
    padding: 20px 1.5%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;

    @media (max-width: 1200px) {
      font-size: 30px;
      text-align: center;
      line-height: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
    }
  }

  button {
    padding: 20px;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    cursor: pointer;
    transition:
      background-color 0.2s ease-in-out,
      color 0.2s ease-in-out;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      background-color: white;
      color: var(--green-primary);
    }

    @media (max-width: 1200px) {
      font-size: 16px;
      padding: 10px 20px;
      font-weight: 400;
    }
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  img {
    height: 85px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
      height: 60px;
    }
  }

  div {
    display: flex;
    gap: 20px;
    align-items: center;

    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 50%;
  gap: 40px;

  @media (max-width: 1200px) {
    justify-content: end;
  }

  @media (max-width: 1000px) {
    flex-basis: 70%;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 450px) {
    flex-basis: 100%;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 16px;

    @media (max-width: 450px) {
      font-size: 14px;
    }
  }

  .links-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .company-links {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
