import styled from 'styled-components';
import { motion } from 'framer-motion';

import { GetFreeQuote } from '../../components/GetFreeQuote';
import { ServicesSection } from '../../components/ServicesSection';
import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

export function Section3() {
  return (
    <Container>
      <Header>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
          We offer a wide range of Facility Management Services in Sydney
        </motion.h2>
        <div>
          <GetFreeQuote index={1} />
          <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 2, as: motion.p })}>
            Let us be your partner in creating a space that reflects your style and meets your practical needs.
          </motion.p>
        </div>
      </Header>

      <ServicesSection />
    </Container>
  );
}

const Container = styled.section`
  margin: 0 auto;
  padding: 72px;

  @media (max-width: 1100px) {
    padding: 40px 1.5%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 43px;
    max-width: 520px;

    @media (max-width: 1440px) {
      font-size: 30px;
    }

    @media (max-width: 960px) {
      font-size: 30px;
      text-align: center;
      margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    @media (max-width: 960px) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 16px;
    }

    button {
      background-color: var(--green-primary);
      color: white;
      border: none;
      padding: 20px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: var(--green-primary-deep);
      }

      @media (max-width: 960px) {
        padding: 12px 24px;
      }
    }

    p {
      font-size: 18px;
      max-width: 500px;
      text-align: right;

      @media (max-width: 960px) {
        font-size: 16px;
        text-align: center;
        max-width: 400px;
      }
    }
  }
`;
