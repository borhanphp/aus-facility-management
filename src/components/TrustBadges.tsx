import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaClock, FaLeaf, FaStar, FaUsers } from 'react-icons/fa';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

const badges = [
  {
    icon: FaUsers,
    title: '10+ Years Experience',
    description: 'Serving Sydney since 2014',
  },
  {
    icon: FaShieldAlt,
    title: 'Fully Insured & Licensed',
    description: 'Complete protection & compliance',
  },
  {
    icon: FaClock,
    title: '24/7 Emergency Service',
    description: 'Available when you need us',
  },
  {
    icon: FaLeaf,
    title: 'Eco-Friendly Products',
    description: 'Safe for family & environment',
  },
  {
    icon: FaStar,
    title: '100% Satisfaction Guarantee',
    description: 'We stand behind our work',
  },
  {
    icon: FaCheckCircle,
    title: 'Professional Team',
    description: 'Police-checked & trained staff',
  },
];

export const TrustBadges: React.FC = () => {
  return (
    <TrustBadgesContainer>
      <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
        Why Sydney Trusts AUS Facility Management
      </motion.h2>
      
      <BadgesGrid>
        {badges.map((badge, index) => (
          <BadgeCard key={index} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
            <IconWrapper>
              <badge.icon />
            </IconWrapper>
            <h3>{badge.title}</h3>
            <p>{badge.description}</p>
          </BadgeCard>
        ))}
      </BadgesGrid>
    </TrustBadgesContainer>
  );
};

const TrustBadgesContainer = styled.section`
  padding: 80px 72px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);

  @media (max-width: 1440px) {
    padding: 60px 1.5%;
  }

  @media (max-width: 768px) {
    padding: 40px 1.5%;
  }

  h2 {
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 56px;
    color: #1a1a1a;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 40px;
    }
  }
`;

const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const BadgeCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 36px 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    border-color: var(--green-primary-light);
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
  }

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
    font-size: 15px;
    color: #666;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-primary-deep) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(76, 175, 80, 0.25);

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 16px;
  }

  svg {
    font-size: 40px;
    color: white;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
`;

