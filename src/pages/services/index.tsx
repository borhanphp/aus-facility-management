import styled from 'styled-components';
import { motion } from 'framer-motion';

import { TopHeader } from '../../components/TopHeader';
import MotionWrapper from '../../framer-motion/MotionWrapper';
import { ServicesSection } from '../../components/ServicesSection';
import { ReviewsSection } from '../../page-components/home/ReviewsSection';
import { OurWorkProcessSection } from '../../page-components/home/OurWorkProcessSection';
import { SEO } from '../../components/SEO';
import { StructuredData } from '../../components/StructuredData';

export default function Services() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.ausfacility.com.au',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.ausfacility.com.au/services',
      },
    ],
  };

  return (
    <>
      <SEO
        title="Our Services - AUS Facility Management Sydney"
        description="Comprehensive facility management services in Sydney. Professional cleaning, pest control, lawn care, construction, building maintenance, and recruitment services. Quality guaranteed."
        keywords="Facility Management Services Sydney, Cleaning Services Sydney, Pest Control Sydney, Lawn Care Sydney, Construction Sydney, Building Maintenance Sydney, Job Recruitment Sydney, Professional Services Sydney"
        ogImage="https://www.ausfacility.com.au/images/home-3.jpg"
        canonicalUrl="https://www.ausfacility.com.au/services"
      />
      <StructuredData data={breadcrumbSchema} />

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
