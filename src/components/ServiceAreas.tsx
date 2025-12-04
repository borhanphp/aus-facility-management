import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SYDNEY_SERVICE_AREAS } from '../constants/serviceAreas';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

export const ServiceAreas: React.FC = () => {
  return (
    <ServiceAreasContainer>
      <HeaderSection>
        <IconWrapper>
          <FaMapMarkerAlt />
        </IconWrapper>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
          We Service All Sydney Areas
        </motion.h2>
        <motion.p className="intro" {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.p })}>
          From Sydney CBD to the Northern Beaches, Western Sydney to the Eastern Suburbs - we provide professional
          services across all Greater Sydney regions. No matter where you're located, our team can reach you promptly
          and deliver exceptional results.
        </motion.p>
      </HeaderSection>

      <RegionsGrid>
        {SYDNEY_SERVICE_AREAS.map((area, index) => (
          <RegionCard key={area.region} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
            <RegionTitle>{area.region}</RegionTitle>
            <SuburbsList>
              {area.suburbs.map((suburb) => (
                <SuburbItem key={suburb}>{suburb}</SuburbItem>
              ))}
            </SuburbsList>
          </RegionCard>
        ))}
      </RegionsGrid>

      <CTASection>
        <motion.p {...FADE_IN_WHILE_IN_VIEW({ as: motion.p })}>
          Can't find your suburb? We service all Greater Sydney areas including surrounding regions.
          <br />
          <strong>Call us on 0430 188 729 to confirm we service your area!</strong>
        </motion.p>
      </CTASection>
    </ServiceAreasContainer>
  );
};

const ServiceAreasContainer = styled.section`
  padding: 80px 72px;
  background: #ffffff;

  @media (max-width: 1440px) {
    padding: 60px 1.5%;
  }

  @media (max-width: 768px) {
    padding: 40px 1.5%;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 56px;

  h2 {
    font-size: 42px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 16px;
    }
  }

  .intro {
    font-size: 18px;
    line-height: 1.7;
    color: #555;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-primary-deep) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(76, 175, 80, 0.25);

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
  }

  svg {
    font-size: 40px;
    color: white;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
`;

const RegionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto 48px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const RegionCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 32px;
  border: 2px solid var(--green-primary-light);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: var(--green-primary);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const RegionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: var(--green-primary);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--green-primary-light);

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const SuburbsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SuburbItem = styled.span`
  font-size: 14px;
  color: #555;
  background: white;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    background: var(--green-primary-lighter);
    border-color: var(--green-primary);
    color: var(--green-primary-deep);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: 32px;
  background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-primary-deep) 100%);
  border-radius: 12px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: white;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    strong {
      display: block;
      margin-top: 12px;
      font-size: 20px;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
`;

