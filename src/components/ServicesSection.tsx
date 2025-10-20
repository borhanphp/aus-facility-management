import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { SERVICES } from '../constants/others';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

export const ServicesSection = () => {
  return (
    <ServicesGrid>
      {SERVICES.map((service, index) => (
        <Link href={`${service.link}`} key={service.link}>
          <ServiceCard key={index} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
            <img src={service.image} alt={service.name} />
            <ServiceInfo as={motion.div}>
              <h3>{service.name}</h3>
              <AiOutlineArrowRight size={20} />
            </ServiceInfo>
          </ServiceCard>
        </Link>
      ))}
    </ServicesGrid>
  );
};

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1100px) {
    gap: 24px;
  }
  @media (max-width: 900px) {
    gap: 10px;
  }
`;

const ServiceCard = styled(motion.a)`
  width: 405px;
  background-color: var(--green-primary-lighter);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s;
  flex-grow: 1;
  cursor: pointer;

  @media (max-width: 1100px) {
    &:last-child {
      max-width: 100%;
    }
  }
  @media (max-width: 870px) {
    width: 300px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;

    @media (max-width: 450px) {
      height: 200px;
    }
  }
`;

const ServiceInfo = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`;
