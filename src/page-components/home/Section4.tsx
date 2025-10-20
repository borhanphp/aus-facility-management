import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiOutlineClock } from 'react-icons/hi2';
import { RiCalendarCheckLine } from 'react-icons/ri';

import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

export const Section4 = () => {
  return (
    <Container>
      <LeftSection>
        <motion.img
          {...FADE_IN_WHILE_IN_VIEW({ index: 0, as: motion.img })}
          src="/images/home-1.jpg"
          alt="placeholder"
        />
        <motion.img
          {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.img })}
          src="/images/home-2.jpg"
          alt="placeholder"
        />
        <motion.img
          {...FADE_IN_WHILE_IN_VIEW({ index: 2, as: motion.img })}
          src="/images/home-3.jpg"
          alt="placeholder"
        />
      </LeftSection>
      <RightSection>
        <motion.h3 {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.h3 })}>
          Best Affordable & Reliable Facility Management in Sydney
        </motion.h3>
        <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 2, as: motion.p })}>
          Our expert team of facility managers and handymen in Sydney is equipped to handle all your maintenance
          needs, ensuring your commercial spaces operate smoothly and efficiently. Whether it’s routine upkeep,
          addressing urgent repairs, or managing large-scale renovations, we provide comprehensive solutions to keep
          your business running seamlessly. From minor fixes like plumbing issues to full-scale office refurbishments,
          trust us to deliver reliable and high-quality facility management across Sydney.
        </motion.p>

        <RightBottomSection>
          <motion.div {...FADE_IN_WHILE_IN_VIEW({ index: 3, as: motion.div })}>
            <div className="icon-container">
              <RiCalendarCheckLine size={24} />
            </div>
            <div className="text">
              <p>24/7</p>
              <p>Available</p>
            </div>
          </motion.div>
        </RightBottomSection>
      </RightSection>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 72px;
  gap: 75px;

  & > * {
    flex-basis: 50%;
  }

  @media (max-width: 1275px) {
    flex-direction: column;
    gap: 40px;
    padding: 40px 1.5%;
  }

  @media (max-width: 575px) {
    gap: 20px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 575px) {
    gap: 10px;
  }

  img {
    height: 250px;
    border-radius: 15px;
    max-width: 50%;
    flex-grow: 1;
    object-fit: cover;

    @media (max-width: 575px) {
      max-width: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  img:nth-child(1) {
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1275px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  h3 {
    font-size: 48px;
    font-weight: 600;

    @media (max-width: 1275px) {
      font-size: 30px;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;

    @media (max-width: 1275px) {
      font-size: 16px;
      text-align: center;
      max-width: 600px;
    }
  }
`;

const RightBottomSection = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      border-radius: 10px;
      padding: 20px;
      background-color: var(--green-primary);

      @media (max-width: 1275px) {
        width: 50px;
        height: 50px;
        padding: 10px;
      }

      svg {
        font-size: 30px;
        color: white;
      }
    }

    .text {
      p:first-child {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;

        @media (max-width: 1275px) {
          font-size: 20px;
          margin-bottom: 4px;
        }
      }

      p:last-child {
        font-size: 16px;
        font-weight: 300;

        @media (max-width: 1275px) {
          font-size: 14px;
        }
      }
    }
  }
`;
