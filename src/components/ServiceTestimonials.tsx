import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Testimonial } from '../constants/serviceTestimonials';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
  serviceName: string;
}

export const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({ testimonials, serviceName }) => {
  // Generate Review schema markup
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AUS Facility Management',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonials.length.toString(),
    },
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      datePublished: testimonial.date,
      reviewBody: testimonial.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
      },
    })),
  };

  return (
    <>
      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <TestimonialsContainer>
        <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
          What Our Clients Say About Our {serviceName}
        </motion.h2>
        <motion.p className="subtitle" {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.p })}>
          Real reviews from satisfied customers across Sydney
        </motion.p>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}>
              <StarRating>{'★'.repeat(testimonial.rating)}</StarRating>
              <ReviewText>"{testimonial.text}"</ReviewText>
              <ClientInfo>
                <ClientImageWrapper>
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.service} review`}
                    layout="fill"
                    quality={85}
                    objectFit="cover"
                  />
                </ClientImageWrapper>
                <ClientDetails>
                  <h4>{testimonial.name}</h4>
                  <p className="location">{testimonial.location}</p>
                  <p className="service">{testimonial.service}</p>
                </ClientDetails>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </>
  );
};

const TestimonialsContainer = styled.section`
  padding: 80px 72px;
  background-color: var(--green-primary-lighter);

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
    margin-bottom: 16px;
    color: #1a1a1a;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .subtitle {
    font-size: 18px;
    text-align: center;
    color: #666;
    margin-bottom: 48px;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 32px;
    }
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const StarRating = styled.div`
  color: #ffcc00;
  font-size: 24px;
  margin-bottom: 16px;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 24px;
  flex-grow: 1;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
`;

const ClientImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--green-primary-light);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
`;

const ClientDetails = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 2px 0;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    &.service {
      color: var(--green-primary);
      font-weight: 500;
    }

    &.location {
      font-size: 13px;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

