import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

export function Section2() {
  return (
    <Banner>
      <div>
        <Title {...FADE_IN_WHILE_IN_VIEW({ as: motion.h1 })}>
          Top-Rated Facility Management service provider in Sydney
        </Title>
        <Stats>
          <Stat>
            <StatNumber {...FADE_IN_WHILE_IN_VIEW({ as: motion.div })}>10+</StatNumber>
            <StatLabel {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.div })}>Years of Experience</StatLabel>
          </Stat>
          <Stat>
            <StatNumber {...FADE_IN_WHILE_IN_VIEW({ index: 2, as: motion.div })}>1000+</StatNumber>
            <StatLabel {...FADE_IN_WHILE_IN_VIEW({ index: 3, as: motion.div })}>Happy Clients</StatLabel>
          </Stat>
          <Stat>
            <StatNumber {...FADE_IN_WHILE_IN_VIEW({ index: 4, as: motion.div })}>100%</StatNumber>
            <StatLabel {...FADE_IN_WHILE_IN_VIEW({ index: 5, as: motion.div })}>Customer Satisfaction</StatLabel>
          </Stat>
        </Stats>
      </div>
    </Banner>
  );
}

const Banner = styled.section`
  background-color: var(--green-primary);
  max-width: 100% !important;

  & > div {
    max-width: 1440px;
    margin: 0 auto;
    color: white;
    padding: 48px 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
      padding: 24px 1.5%;
      flex-direction: column;
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: 36px;
  max-width: 600px;
  font-weight: 500;

  @media (max-width: 1200px) {
    text-align: center;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 400px;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 20px;
`;

const Stat = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled(motion.div)`
  font-size: 48px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 0px;
  }
`;

const StatLabel = styled(motion.div)`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 300;
  }
`;
