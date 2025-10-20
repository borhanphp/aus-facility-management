import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

import { HeaderForm } from '../../components/HeaderForm';
import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

const BulletPoints = [
  'Professional Sydney-based cleaners',
  'Friendly customer service',
  'Eco-friendly cleaning products',
  'Fully Insured',
  '24/7 Emergency Services across Sydney',
  'Over 10 Years of Experience',
];

export const Section1 = () => {
  return (
    <HeaderContainer>
      <div>
        <LeftSection>
          <motion.h1 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h1 })}>
            Best Reliable Facility Management Provider in Sydney
          </motion.h1>

          <BulletPointContainer>
            {BulletPoints.map((point, index) => (
              <motion.div key={point} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
                <FaCheckCircle height={33} width={33} />
                <p>{point}</p>
              </motion.div>
            ))}
          </BulletPointContainer>
        </LeftSection>

        <RightSection>
          <HeaderForm />
        </RightSection>
      </div>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  max-width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/header-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & > div {
    max-width: 1440px;
    margin: 0 auto;
    padding: 72px;
    color: white;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1200px) {
      padding: 40px 1.5%;
      flex-direction: column;
    }
  }
`;

export const LeftSection = styled.div`
  max-width: 640px;

  @media (max-width: 1200px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 24px;

    @media (max-width: 1200px) {
      font-size: 30px;
      font-weight: 500;
      text-align: center;
      max-width: 460px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const BulletPointContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1200px) {
    width: auto;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1200px) {
      width: auto;
    }

    p {
      font-size: 30px;

      @media (max-width: 1200px) {
        font-size: 20px;
        text-align: left;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
  svg {
    font-size: 33px;

    @media (max-width: 1200px) {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const RightSection = styled.div`
  max-width: 498px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
  border-radius: 8px;
  flex-grow: 1;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;
