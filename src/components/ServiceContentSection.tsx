import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { ServiceContent } from '../constants/serviceContent';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

interface ServiceContentSectionProps {
  content: ServiceContent;
  serviceName: string;
}

export const ServiceContentSection: React.FC<ServiceContentSectionProps> = ({ content, serviceName }) => {
  return (
    <ContentContainer>
      <IntroSection>
        {content.introduction.map((paragraph, index) => (
          <motion.p key={index} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.p })}>
            {paragraph}
          </motion.p>
        ))}
      </IntroSection>

      <WhyChooseSection>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>{content.whyChoose.title}</motion.h2>
        <BenefitsList>
          {content.whyChoose.items.map((item, index) => {
            const parts = item.split('**');
            const title = parts[1];
            const description = parts[2]?.replace(': ', '');

            return (
              <BenefitItem key={index} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
                <IconWrapper>
                  <FaCheckCircle />
                </IconWrapper>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </BenefitItem>
            );
          })}
        </BenefitsList>
      </WhyChooseSection>

      <ServiceAreasSection>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
          Our Service Areas Across Sydney
        </motion.h2>
        <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.p })}>{content.serviceAreas}</motion.p>
      </ServiceAreasSection>

      <ProcessSection>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>{content.process.title}</motion.h2>
        <ProcessGrid>
          {content.process.steps.map((step, index) => (
            <ProcessCard key={index} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessSection>

      <GuaranteeSection>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
          Our 100% Satisfaction Guarantee
        </motion.h2>
        <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.p })}>{content.guarantee}</motion.p>
      </GuaranteeSection>
    </ContentContainer>
  );
};

const ContentContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 72px;

  @media (max-width: 1440px) {
    padding: 60px 1.5%;
  }

  @media (max-width: 768px) {
    padding: 40px 1.5%;
  }
`;

const IntroSection = styled.div`
  margin-bottom: 60px;

  p {
    font-size: 18px;
    line-height: 1.8;
    color: #333;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 1.6;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const WhyChooseSection = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  gap: 16px;
  align-items: flex-start;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

const IconWrapper = styled.div`
  min-width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;

  svg {
    font-size: 28px;
    color: var(--green-primary);
  }
`;

const ServiceAreasSection = styled.div`
  margin-bottom: 60px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    color: #333;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ProcessSection = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 40px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProcessCard = styled(motion.div)`
  padding: 30px;
  background: white;
  border: 2px solid var(--green-primary-light);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 22px;
    font-weight: 600;
    color: var(--green-primary);
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

const GuaranteeSection = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-primary-deep) 100%);
  border-radius: 12px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    opacity: 0.95;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

