import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { GetFreeQuote } from '../../components/GetFreeQuote';
import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

export const Section5 = () => {
  return (
    <Container>
      <div>
        <LeftSection>
          <motion.div className="image-wrapper" {...FADE_IN_WHILE_IN_VIEW({ index: 0, as: motion.div })}>
            <Image
              src="/images/home-4.png"
              alt="Trusted facility management provider in Sydney"
              layout="fill"
              quality={85}
              objectFit="cover"
            />
          </motion.div>
          <LeftInner {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.div })}>
            <div>
              <h4>10+</h4>
              <p>Years of activity</p>
            </div>
            <Divider />
            <div>
              <h4>1000+</h4>
              <p>Projects</p>
            </div>
          </LeftInner>
        </LeftSection>
        <RightSection>
          <motion.h3 {...FADE_IN_WHILE_IN_VIEW({ index: 0, as: motion.h3 })}>
            We Are Your Trusted Facility Management Provider in Sydney
          </motion.h3>
          <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.h3 })}>
            Founded with a vision to redefine commercial property management in Sydney, AUS Facility Management emerged
            from a passion for craftsmanship and a desire to create workspaces that go beyond the ordinary. From minor
            repairs to extensive remodeling, our commitment to quality and Sydney customer satisfaction remains
            unwavering.
          </motion.p>
          <GetFreeQuote index={2} />
        </RightSection>
      </div>
    </Container>
  );
};

const Container = styled.section`
  max-width: 100% !important;
  background-color: var(--green-primary);

  & > div {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 75px;
    padding: 72px;
    color: white;

    & > * {
      flex-basis: 50%;
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 40px;
      padding: 40px 1.5%;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
  }

  .image-wrapper {
    width: 582px;
    height: 540px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;

    @media (max-width: 1200px) {
      width: 100%;
      max-height: 400px;
    }

    @media (max-width: 768px) {
      max-height: 300px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 1200px) {
    align-items: center;
    gap: 20px;
  }

  h3 {
    font-size: 48px;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 30px;
      text-align: center;
      max-width: 600px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;

    @media (max-width: 1200px) {
      font-size: 16px;
      text-align: center;
      max-width: 650px;
    }
  }

  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 20px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: var(--green-primary-deep);
      border-color: transparent;
    }

    @media (max-width: 1200px) {
      padding: 10px 20px;
    }
  }
`;

const LeftInner = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 502px;
  background-color: var(--green-primary-light);
  padding: 30px 50px;
  border-radius: 15px;
  align-self: center;
  margin-top: -95px;

  & > div:not(:nth-child(2)) {
    text-align: center;
    h4 {
      font-size: 50px;
      font-weight: 600;
      margin-bottom: 8px;

      @media (max-width: 768px) {
        font-size: 30px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    width: 350px;
    padding: 20px 30px;
    margin-top: -80px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px 20px;
    margin-top: -60px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 92px;
  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    height: 70px;
  }
`;
