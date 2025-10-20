import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { TopHeader } from '../../components/TopHeader';
import { GetFreeQuote } from '../../components/GetFreeQuote';
import MotionWrapper from '../../framer-motion/MotionWrapper';
import { MAIN_SERVICES, SERVICES } from '../../constants/others';
import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

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

  return (
    <>
      <MotionWrapper>
        <TopHeader $headerbg={service.image} $bgposition={getBgPosition(service.name)}>
          <h2>{service?.name}</h2>
        </TopHeader>

        <SubServiceCardWrapper>
          {service?.subServices.map((subService, index) => (
            <SubServiceCard {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })} key={subService.service}>
              <img src={subService.image} alt={subService.service} />
              <h3>{subService.service}</h3>
              <p>{subService.description}</p>

              <GetFreeQuote />
            </SubServiceCard>
          ))}
        </SubServiceCardWrapper>
      </MotionWrapper>

      <Head>
        <title>AUS | {service?.name}</title>
        <meta name="description" content={service?.metaDescription} />
        <meta name="keywords" content={service?.keywords} />
        <meta name="author" content="AUS Facility Management" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="sitemap" content="https://www.ausfacility.com.au/sitemap.xml" />
        <meta
          name="google-site-verification"
          content="google-site-verification=KVTToUtx8h4av9PVkwJXng5E5NsPhuCX-wD_vXmViiQ"
        />
      </Head>
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

  img {
    width: 100%;
    height: 236px;
    object-fit: cover;
    border-radius: 12px;
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
