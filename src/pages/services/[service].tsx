import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { TopHeader } from '../../components/TopHeader';
import { GetFreeQuote } from '../../components/GetFreeQuote';
import MotionWrapper from '../../framer-motion/MotionWrapper';
import { MAIN_SERVICES, SERVICES } from '../../constants/others';
import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';
import { SEO } from '../../components/SEO';
import { StructuredData } from '../../components/StructuredData';
import { Breadcrumb } from '../../components/Breadcrumb';
import { FAQSection } from '../../components/FAQSection';
import { SERVICE_FAQS } from '../../constants/faqs';

export default function SubServicePage() {
  const router = useRouter();

  const service = SERVICES.find((service) => service.link === `/services/${router.query.service}`);

  if (!service) return null;

  const getBgPosition = (serviceName: string) => {
    switch (serviceName) {
      case MAIN_SERVICES[0]: // cleaning services
        return 'top 50% left 0%';
      case MAIN_SERVICES[1]: // Lawn & Gardening
        return 'top 65% left 0%';
      case MAIN_SERVICES[2]: //  Pest Control & Termite
        return 'top 10% left 0%';
      case MAIN_SERVICES[3]: // Faculty Management
        return 'top 30% left 0%';
      case MAIN_SERVICES[4]: // Construction Services
        return 'top 80% left 0%';
      case MAIN_SERVICES[5]: // Job Recruitment
        return 'top 45% left 0%';
      default:
        return 'top 20% left 20%';
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'AUS Facility Management',
      url: 'https://www.ausfacility.com.au',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
      containedInPlace: {
        '@type': 'State',
        name: 'New South Wales',
      },
    },
    description: service.metaDescription,
    url: `https://www.ausfacility.com.au${service.link}`,
    image: `https://www.ausfacility.com.au${service.image}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'AUD',
    },
  };

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
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `https://www.ausfacility.com.au${service.link}`,
      },
    ],
  };

  // Get related services (exclude current service)
  const relatedServices = SERVICES.filter((s) => s.link !== service.link).slice(0, 3);

  // Get FAQ data for this service
  const serviceSlug = router.query.service as string;
  const faqs = SERVICE_FAQS[serviceSlug as keyof typeof SERVICE_FAQS] || [];

  return (
    <>
      <SEO
        title={`${service.name} Sydney | AUS Facility Management`}
        description={service.metaDescription}
        keywords={service.keywords}
        ogImage={`https://www.ausfacility.com.au${service.image}`}
        canonicalUrl={`https://www.ausfacility.com.au${service.link}`}
      />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />

      <MotionWrapper>
        <TopHeader $headerbg={service.image} $bgposition={getBgPosition(service.name)}>
          <h2>{service?.name}</h2>
        </TopHeader>

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: service.name, href: service.link },
          ]}
        />

        <SubServiceCardWrapper>
          {service?.subServices.map((subService, index) => (
            <SubServiceCard {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })} key={subService.service}>
              <div className="image-wrapper">
                <Image
                  src={subService.image}
                  alt={`${subService.service} - ${service.name} Sydney`}
                  layout="fill"
                  quality={85}
                  objectFit="cover"
                />
              </div>
              <h3>{subService.service}</h3>
              <p>{subService.description}</p>

              <GetFreeQuote />
            </SubServiceCard>
          ))}
        </SubServiceCardWrapper>

        {faqs.length > 0 && <FAQSection faqs={faqs} serviceName={service.name} />}

        <RelatedServicesSection>
          <h2>Other Services You May Need</h2>
          <RelatedServicesGrid>
            {relatedServices.map((relatedService) => (
              <Link href={relatedService.link} key={relatedService.link}>
                <RelatedServiceCard>
                  <div className="image-wrapper">
                    <Image
                      src={relatedService.image}
                      alt={`${relatedService.name} Sydney`}
                      layout="fill"
                      quality={85}
                      objectFit="cover"
                    />
                  </div>
                  <h3>{relatedService.name}</h3>
                  <p>{relatedService.metaDescription}</p>
                  <span>Learn More →</span>
                </RelatedServiceCard>
              </Link>
            ))}
          </RelatedServicesGrid>
        </RelatedServicesSection>
      </MotionWrapper>
    </>
  );
}

const SubServiceCardWrapper = styled.div`
  padding: 120px 72px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1440px) {
    gap: 24px;
    padding: 40px 1.5%;
  }
`;

const SubServiceCard = styled(motion.div)`
  width: 405px;
  border: 1px solid var(--green-primary-light);
  border-radius: 15px;
  overflow: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
  flex-grow: 1;

  @media (max-width: 1440px) {
    flex-grow: 1;
  }

  @media (max-width: 1200px) {
    gap: 12px;
  }

  @media (max-width: 870px) {
    width: 330px;
  }

  .image-wrapper {
    width: 100%;
    height: 236px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  h3 {
    font-size: 35px;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;

    @media (max-width: 1200px) {
      font-size: 16px;
    }
  }

  button {
    padding: 13px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background-color: var(--green-primary);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--green-primary-deep);
    }

    @media (max-width: 1200px) {
      padding: 10px 20px;
      font-size: 16px;
    }
  }
`;

const RelatedServicesSection = styled.div`
  padding: 80px 72px;
  background-color: #f9f9f9;

  @media (max-width: 1440px) {
    padding: 40px 1.5%;
  }

  h2 {
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 48px;

    @media (max-width: 1200px) {
      font-size: 32px;
      margin-bottom: 32px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
`;

const RelatedServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .image-wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 20px 12px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 20px;
      padding: 16px 16px 8px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    padding: 0 20px;
    color: #666;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 0 16px;
    }
  }

  span {
    display: block;
    padding: 16px 20px 20px;
    color: var(--green-primary);
    font-weight: 600;
    font-size: 16px;

    @media (max-width: 768px) {
      padding: 12px 16px 16px;
      font-size: 14px;
    }
  }
`;
