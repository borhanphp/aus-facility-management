import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BiPhoneCall } from 'react-icons/bi';
import { FaCheckCircle } from 'react-icons/fa';

import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

const CARDS_CONTENT = [
  {
    title: 'Certified',
    description:
      'Our quality, environmental, and health & safety ISO certifications ensure we adopt the best practices in the industry. We adhere to the highest standards, providing you with peace of mind and exceptional service quality across all our operations.',
  },
  {
    title: 'Reliable',
    description:
      "We pride ourselves on punctuality and consistency, turning up when we say we will and delivering services that meet our clients' expectations every time. Our reliability sets us apart and ensures smooth, uninterrupted facility management.",
  },
  {
    title: 'Trained',
    description:
      "Our staff's expertise is your advantage. We invest heavily in advanced cleaning training and foster a strong teamwork culture. This commitment to continuous improvement equips our team to handle any facility management challenge effectively and efficiently.",
  },
  {
    title: 'Competitive',
    description:
      'We believe in fair pricing for quality services. Our rates are competitively set to offer value-added, cost-saving solutions. We strike the perfect balance between affordability and excellence, ensuring you receive maximum value for your investment.',
  },
  {
    title: 'Dependable',
    description:
      "We're always there when you need us. Our office is contactable around the clock, allowing us to prioritize and swiftly respond to emergency and urgent service requests. Count on AUS Facility Management for unwavering support, day or night.",
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Going above and beyond is our norm. We ensure our clients are fully satisfied and supported, backing this with our customer service guarantee. Your contentment is our priority, driving us to consistently exceed expectations in all we do.',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <Container>
      <div>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ index: 0, as: motion.h2 })}>
          Why Choose AUS Facility Management?
        </motion.h2>
        <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.p })}>
          Whether you have a specific project in mind or need guidance on where to start, our Sydney-based team is here
          to assist you. AUS Facility Management stands out as your premier choice for facility management services in
          Sydney.
        </motion.p>
      </div>

      <CardsContainer>
        {CARDS_CONTENT.map((card, index) => (
          <Card key={card.title} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
            <IconBox>
              <FaCheckCircle />
            </IconBox>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Card>
        ))}
      </CardsContainer>

      <BottomSection>
        <motion.h3 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h3 })}>Our service available 24/7 via phone</motion.h3>
        <motion.a {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.a })} href="tel:+610430188729">
          <div>
            <BiPhoneCall fontSize={32} height={50} width={50} />

            <p>0430188729</p>
          </div>
        </motion.a>
      </BottomSection>
    </Container>
  );
};

const Container = styled.section`
  padding: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: 1440px) {
    padding: 40px 1.5%;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  h2 {
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    max-width: 728px;
    margin-bottom: 24px;

    @media (max-width: 1440px) {
      font-size: 40px;
    }

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    max-width: 728px;

    @media (max-width: 1440px) {
      font-size: 16px;
    }
  }
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 1440px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  width: 393px;
  padding: 24px;
  border-radius: 8px;
  background-color: var(--green-primary-lighter);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-grow: 1;

  @media (max-width: 1440px) {
    gap: 5px;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 8px;

    @media (max-width: 1200px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
  }
`;

const IconBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: var(--green-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 50px;
    height: 50px;
  }

  svg {
    font-size: 30px;
    color: white;
  }
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 170px;
  width: 100%;
  border-radius: 15px;
  padding: 50px;
  color: white;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/bg-2.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    padding: 20px 1.5%;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  h3 {
    font-size: 26px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px 10px 15px;
    border-radius: 50px;

    svg {
      background-color: var(--green-primary);
      padding: 9px;
      height: 50px;
      width: 50px;
      font-size: 32px;
      color: white;
      border-radius: 50%;
    }
  }
`;
