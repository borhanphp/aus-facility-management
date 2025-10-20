import Head from 'next/head';

import MotionWrapper from '../framer-motion/MotionWrapper';
import { Section1 } from '../page-components/home/Section1';
import { Section2 } from '../page-components/home/Section2';
import { Section3 } from '../page-components/home/Section3';
import { Section4 } from '../page-components/home/Section4';
import { Section5 } from '../page-components/home/Section5';
import { ReviewsSection } from '../page-components/home/ReviewsSection';
import { WhyChooseUsSection } from '../page-components/home/WhyChooseUsSection';
import { OurWorkProcessSection } from '../page-components/home/OurWorkProcessSection';

export default function Home() {
  return (
    <>
      <MotionWrapper>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <WhyChooseUsSection />
        <ReviewsSection />
        <OurWorkProcessSection />
      </MotionWrapper>

      <Head>
        <title>AUS | Home</title>

        <meta
          name="description"
          content="AUS Facility Management is a leading provider of services for cleaning, pest control, construction, lawn mowing, electrical, plumbing, job recruitment, emergency preparedness, and other services in Sydney."
        />

        <meta property="og:title" content="AUS Facility Management" />
        <meta
          name="og:description"
          content="AUS Facility Management is a leading provider of services for cleaning, pest control, construction, lawn mowing, electrical, plumbing, job recruitment, emergency preparedness, and other services in Sydney."
        />
      </Head>
    </>
  );
}
