import styled from 'styled-components';
import { motion } from 'framer-motion';

import MotionWrapper from '../framer-motion/MotionWrapper';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';
import { WhyChooseUsSection } from '../page-components/home/WhyChooseUsSection';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';

export default function About() {
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
        name: 'About Us',
        item: 'https://www.ausfacility.com.au/about',
      },
    ],
  };

  return (
    <>
      <SEO
        title="About Us - AUS Facility Management Sydney"
        description="Learn about AUS Facility Management, Sydney's leading provider of professional cleaning, pest control, construction, and facility services. Committed to sustainability and excellence."
        keywords="About AUS Facility Management, Facility Management Sydney, Professional Services Sydney, Sustainable Cleaning Sydney, Sydney Facility Services Company"
        ogImage="https://www.ausfacility.com.au/images/about-1.jpg"
        canonicalUrl="https://www.ausfacility.com.au/about"
      />
      <StructuredData data={breadcrumbSchema} />

      <MotionWrapper>
        <AboutContainer>
          <div className="text-container">
            <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>About AUS Facility Management PTY LTD</motion.h2>
            <motion.p {...FADE_IN_WHILE_IN_VIEW({ as: motion.p, index: 1 })}>
              Based in the vibrant city of Sydney, Australia, AUS is dedicated to providing exceptional facility management
              and cleaning services with a strong emphasis on sustainability.Our mission is to create clean, safe, and
              environmentally friendly spaces that enhance the well-being of our clients and the broader community.
            </motion.p>
          </div>

          <ImageContainer>
            <motion.img
              {...FADE_IN_WHILE_IN_VIEW({ as: motion.img, index: 1 })}
              src="/images/about-1.jpg"
              alt="aus about image 1"
            />
            <motion.img
              {...FADE_IN_WHILE_IN_VIEW({ as: motion.img, index: 2 })}
              src="/images/about-2.jpg"
              alt="aus about image 2"
            />
            <motion.img
              {...FADE_IN_WHILE_IN_VIEW({ as: motion.img, index: 3 })}
              src="/images/about-3.jpg"
              alt="aus about image 3"
            />
          </ImageContainer>

          <div className="text-container">
            <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>Our Mission</motion.h2>
            <motion.p {...FADE_IN_WHILE_IN_VIEW({ as: motion.p, index: 1 })}>
              At AUS, we strive to elevate the standard of cleanliness and facility management through sustainable
              practices. Our goal is to deliver services that not only meet our clients' needs but also contribute
              positively to the environment. We believe that a clean space is not just about aesthetics; it's about
              fostering health and productivity.
            </motion.p>
          </div>
          <div className="text-container">
            <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>Our Commitment to Sustainability</motion.h2>
            <motion.p {...FADE_IN_WHILE_IN_VIEW({ as: motion.p, index: 1 })}>
              Sustainability is at the core of everything we do at AUS. We prioritize eco-friendly products and methods,
              ensuring our services contribute to a healthier planet. Our dedicated team is committed to reducing waste
              and conserving resources, making a positive impact in every facility we manage. By choosing AUS, you are
              partnering with a company that values environmental stewardship and responsible practices.
            </motion.p>
          </div>
        </AboutContainer>

        <MeetOutTeamContainer>
          <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>Meet Our Team</motion.h2>
          <motion.p {...FADE_IN_WHILE_IN_VIEW({ as: motion.p, index: 1 })}>
            Whether you have a specific project in mind or need guidance on where to start, our Sydney-based team is
            here to assist you. AUS Facility Management stands out as your premier choice for facility management
            services in Sydney.
          </motion.p>

          <motion.img
            {...FADE_IN_WHILE_IN_VIEW({ as: motion.img, index: 2 })}
            src="/images/about-4.jpg"
            alt="aus team"
          />
        </MeetOutTeamContainer>
        <WhyChooseUsSection />
      </MotionWrapper>
    </>
  );
}

const AboutContainer = styled.div`
  padding: 120px 72px;
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (max-width: 1440px) {
    gap: 40px;
    padding: 40px 1.5%;
  }
  @media (max-width: 1200px) {
    gap: 20px;
    padding: 40px 1.5%;
  }

  div.text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 48px;
    font-weight: 600;
    max-width: 700px;
    margin-bottom: 24px;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 30px;
      text-align: center;
      max-width: 600px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;

    @media (max-width: 1200px) {
      font-size: 16px;
      text-align: center;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 28px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 10px;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
  }

  img {
    width: 416px;
    max-height: 416px;
    object-fit: cover;
    flex-grow: 1;

    @media (max-width: 1200px) {
      width: 300px;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
  }
`;

const MeetOutTeamContainer = styled.div`
  padding: 120px 72px;
  text-align: center;

  @media (max-width: 1440px) {
    padding: 40px 1.5%;
  }

  h2 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 24px;

    @media (max-width: 1200px) {
      font-size: 30px;
      margin-bottom: 10px;
    }
  }

  p {
    margin: 0 auto;
    max-width: 728px;
    font-size: 18px;
    font-weight: 300;

    @media (max-width: 1200px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  img {
    margin-top: 32px;
    width: 100%;
    height: auto;

    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  }
`;
