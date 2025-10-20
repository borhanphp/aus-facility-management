import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LiaCalendarPlus } from 'react-icons/lia';
import { PiSuitcaseSimple } from 'react-icons/pi';
import { HiOutlineMailOpen } from 'react-icons/hi';

import { GetFreeQuote } from '../../components/GetFreeQuote';
import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

const CARDS = [
  {
    title: 'Get Free Quote from us',
    description: "Fill out our form, and we'll get in touch to discuss your needs",
    icons: <PiSuitcaseSimple />,
  },
  {
    title: 'Receive an estimate',
    description: 'Our experts will visit your site to provide an accurate estimate',
    icons: <HiOutlineMailOpen />,
  },
  {
    title: 'The project can start',
    description: 'We work around your schedule, including weekends',
    icons: <LiaCalendarPlus />,
  },
];

export const OurWorkProcessSection = () => {
  return (
    <Container>
      <TopSection>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>Our work process</motion.h2>

        <div className="top-right">
          <GetFreeQuote index={1} />
          <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 2, as: motion.p })}>
            Efficiency Meets Excellence: Your Facility Management Journey with US
          </motion.p>
        </div>
      </TopSection>

      <CardContainer>
        {CARDS.map((card, index) => (
          <Card key={card.title} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
            <div className="icon-container">{card.icons}</div>
            <div className="content-container">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled.section`
  padding: 120px 72px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: 1400px) {
    padding: 40px 1.5%;
    gap: 40px;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 48px;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  div.top-right {
    text-align: right;

    @media (max-width: 650px) {
      text-align: center;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: 10px;
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

      @media (max-width: 1200px) {
        padding: 10px 20px;
        font-size: 16px;
      }

      @media (max-width: 650px) {
        font-weight: 300;
      }

      &:hover {
        background-color: var(--green-primary-deep);
      }
    }

    p {
      font-size: 18px;
      max-width: 400px;
      text-align: right;
      max-width: 405px;
      margin-top: 20px;

      @media (max-width: 1200px) {
        font-size: 16px;
      }

      @media (max-width: 650px) {
        text-align: center;
        margin-top: 10px;
      }
    }
  }
`;

const CardContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  flex-grow: 1;

  @media (max-width: 900px) {
    flex-grow: 0;

    &:last-child {
      flex-grow: 1;
      justify-content: center;
    }
  }

  @media (max-width: 650px) {
    flex-grow: 1;
    justify-content: flex-start !important;
  }

  div.icon-container {
    height: 70px;
    width: 70px;
    border-radius: 10px;
    background-color: var(--green-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;

    @media (max-width: 1200px) {
      height: 60px;
      width: 60px;
    }

    @media (max-width: 768px) {
      margin-right: 10px;
    }

    @media (max-width: 650px) {
      height: 45px;
      width: 45px;
    }

    svg {
      font-size: 30px;
      color: white;
    }
  }

  div.content-container {
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;

      @media (max-width: 1200px) {
        font-size: 16px;
        margin-bottom: 2px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 300;
      max-width: 235px;

      @media (max-width: 1200px) {
        font-size: 14px;
      }

      @media (max-width: 650px) {
        max-width: 100%;
      }
    }
  }
`;
