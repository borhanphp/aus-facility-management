import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { TopHeader } from '../../components/TopHeader';
import MotionWrapper from '../../framer-motion/MotionWrapper';
import { ServicesSection } from '../../components/ServicesSection';
import { ReviewsSection } from '../../page-components/home/ReviewsSection';
import { OurWorkProcessSection } from '../../page-components/home/OurWorkProcessSection';

export default function Services() {
  return (
    <>
      <MotionWrapper>
        <TopHeader>
          <motion.h2>We offer a wide range of Facility </motion.h2>
          <motion.h2>Management Services in Sydney</motion.h2>
        </TopHeader>

        <ServicesSectionContainer as={motion.div}>
          <ServicesSection />
        </ServicesSectionContainer>

        <ReviewSectionWrapper as={motion.div}>
          <ReviewsSection />
        </ReviewSectionWrapper>
        <OurWorkProcessSection />
      </MotionWrapper>

      <Head>
        <title>AUS Facility Management</title>
      </Head>
    </>
  );
}

const ServicesSectionContainer = styled(motion.div)`
  padding: 120px 72px;

  @media (max-width: 1440px) {
    padding: 40px 1.5%;
  }
`;

const ReviewSectionWrapper = styled(motion.div)`
  && > section {
    background-color: white;

    .testimonial-card {
      background-color: var(--green-primary-lighter);
    }
  }
`;
