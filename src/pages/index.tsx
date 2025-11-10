import dynamic from 'next/dynamic';
import MotionWrapper from '../framer-motion/MotionWrapper';
import { Section1 } from '../page-components/home/Section1';
import { Section2 } from '../page-components/home/Section2';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';

// Lazy load below-the-fold components
const Section3 = dynamic(() => import('../page-components/home/Section3').then(mod => mod.Section3));
const Section4 = dynamic(() => import('../page-components/home/Section4').then(mod => mod.Section4));
const Section5 = dynamic(() => import('../page-components/home/Section5').then(mod => mod.Section5));
const WhyChooseUsSection = dynamic(() => import('../page-components/home/WhyChooseUsSection').then(mod => mod.WhyChooseUsSection));
const ReviewsSection = dynamic(() => import('../page-components/home/ReviewsSection').then(mod => mod.ReviewsSection));
const OurWorkProcessSection = dynamic(() => import('../page-components/home/OurWorkProcessSection').then(mod => mod.OurWorkProcessSection));

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.ausfacility.com.au',
    name: 'AUS Facility Management',
    image: 'https://www.ausfacility.com.au/images/home-1.jpg',
    url: 'https://www.ausfacility.com.au',
    telephone: '',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Sydney',
      },
      {
        '@type': 'State',
        name: 'New South Wales',
      },
    ],
    description:
      'AUS Facility Management is a leading provider of professional services in Sydney including cleaning, pest control, construction, lawn care, facility maintenance, and job recruitment.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Facility Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cleaning Services',
            description: 'Professional cleaning services for homes and businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pest Control & Termite Services',
            description: 'Expert pest control and termite treatment',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lawn & Gardening Services',
            description: 'Professional lawn care and landscaping',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Facility Management',
            description: 'Complete building and property maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Services',
            description: 'Home construction, renovations, and extensions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Job Recruitment',
            description: 'Professional recruitment and staffing solutions',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title="AUS Facility Management Sydney | Professional Cleaning, Pest Control & More"
        description="Leading facility management services in Sydney. Expert cleaning, pest control, lawn care, construction, maintenance & recruitment. Professional, reliable & affordable. Book now!"
        keywords="Facility Management Sydney, Cleaning Services Sydney, Pest Control Sydney, Lawn Care Sydney, Construction Services Sydney, Property Maintenance Sydney, Job Recruitment Sydney, Professional Services Sydney, AUS Facility Management"
        ogImage="https://www.ausfacility.com.au/images/home-1.jpg"
        canonicalUrl="https://www.ausfacility.com.au"
      />
      <StructuredData data={localBusinessSchema} />

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
    </>
  );
}
