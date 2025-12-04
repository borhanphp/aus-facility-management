import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import { fetchGoogleReviews, GoogleReview, convertGoogleReviewToTestimonial } from '../lib/googlePlaces';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface GoogleReviewsProps {
  serviceName: string;
  placeId?: string;
  fallbackReviews?: any[]; // Your existing testimonials as fallback
}

export const GoogleReviews: React.FC<GoogleReviewsProps> = ({ serviceName, placeId, fallbackReviews = [] }) => {
  const [reviews, setReviews] = useState<any[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        // Fetch reviews from our server-side API route (no CORS issues)
        const placeDetails = await fetchGoogleReviews();

        if (placeDetails && placeDetails.reviews && placeDetails.reviews.length > 0) {
          // Convert Google reviews to our format - show ALL reviews
          const convertedReviews = placeDetails.reviews
            .map((review) => convertGoogleReviewToTestimonial(review, serviceName));

          setReviews(convertedReviews);
          setRating(placeDetails.rating);
          setTotalReviews(placeDetails.user_ratings_total);
          console.log(`✅ Successfully loaded ${placeDetails.reviews.length} Google reviews`);
        } else {
          console.log('No Google reviews found, using fallback reviews');
        }
      } catch (error) {
        console.error('Error loading Google reviews:', error);
        console.log('Using fallback reviews due to error');
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [serviceName]);

  if (loading) {
    return (
      <LoadingContainer>
        <p>Loading reviews...</p>
      </LoadingContainer>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: reviews.length > 1,
    speed: 500,
    slidesToShow: Math.min(3, reviews.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(2, reviews.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // Generate Review schema markup
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AUS Facility Management',
    aggregateRating:
      rating && totalReviews
        ? {
            '@type': 'AggregateRating',
            ratingValue: rating.toString(),
            reviewCount: totalReviews.toString(),
          }
        : {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: reviews.length.toString(),
          },
    review: reviews.map((testimonial) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <TestimonialsContainer>
        <HeaderSection>
          <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h2 })}>
            What Our Clients Say About Our {serviceName}
          </motion.h2>
          {rating && totalReviews && (
            <RatingBadge {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.div })}>
              <GoogleLogo>
                <Image src="/images/google-logo-placeholder.svg" alt="Google" width={24} height={24} />
              </GoogleLogo>
              <RatingInfo>
                <StarRating>{'★'.repeat(Math.round(rating))}</StarRating>
                <RatingText>
                  <strong>{rating.toFixed(1)}</strong> out of 5 based on <strong>{totalReviews}</strong> reviews
                </RatingText>
              </RatingInfo>
            </RatingBadge>
          )}
          <motion.p className="subtitle" {...FADE_IN_WHILE_IN_VIEW({ index: 2, as: motion.p })}>
            Real reviews from our Google Business Profile
          </motion.p>
        </HeaderSection>

        <SliderContainer>
          <Slider {...sliderSettings}>
            {reviews.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard>
                  <CardStarRating>{'★'.repeat(testimonial.rating)}</CardStarRating>
                  <ReviewText>"{testimonial.text}"</ReviewText>
                  <ClientInfo>
                    <ClientImageWrapper>
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} review`}
                        layout="fill"
                        quality={85}
                        objectFit="cover"
                      />
                    </ClientImageWrapper>
                    <ClientDetails>
                      <h4>{testimonial.name}</h4>
                      <p className="location">{testimonial.location}</p>
                      {testimonial.service && <p className="service">{testimonial.service}</p>}
                    </ClientDetails>
                  </ClientInfo>
                </TestimonialCard>
              </div>
            ))}
          </Slider>
        </SliderContainer>

        <CTASection>
          <motion.p {...FADE_IN_WHILE_IN_VIEW({ as: motion.p })}>
            <strong>Love our service?</strong> Leave us a review on Google to help other Sydney customers find us!
          </motion.p>
          <motion.a
            href={`https://search.google.com/local/writereview?placeid=${placeId || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.a })}
          >
            <ReviewButton>Write a Google Review</ReviewButton>
          </motion.a>
        </CTASection>
      </TestimonialsContainer>
    </>
  );
};

const LoadingContainer = styled.div`
  padding: 80px 72px;
  text-align: center;
  color: #666;
`;

const TestimonialsContainer = styled.section`
  padding: 80px 72px;
  background-color: var(--green-primary-lighter);

  @media (max-width: 1440px) {
    padding: 60px 1.5%;
  }

  @media (max-width: 768px) {
    padding: 40px 1.5%;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 48px;

  h2 {
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #1a1a1a;

    @media (max-width: 768px) {
      font-size: 28px;
      margin-bottom: 16px;
    }
  }

  .subtitle {
    font-size: 18px;
    color: #666;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const RatingBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 16px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 12px 20px;
    gap: 12px;
  }
`;

const GoogleLogo = styled.div`
  display: flex;
  align-items: center;
`;

const RatingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StarRating = styled.div`
  color: #ffcc00;
  font-size: 20px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const RatingText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;

  strong {
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const SliderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto 48px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  .slick-slider {
    padding-bottom: 40px;
  }

  .slick-list {
    padding: 10px 0;
    margin: 0 -15px;
  }

  .slick-slide {
    padding: 0 15px;
    box-sizing: border-box;

    & > div {
      height: 100%;
    }
  }

  .slick-dots {
    bottom: 0;

    li button:before {
      font-size: 12px;
      color: var(--green-primary);
      opacity: 0.5;
    }

    li.slick-active button:before {
      color: var(--green-primary);
      opacity: 1;
    }
  }

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;

    &:before {
      font-size: 50px;
      color: var(--green-primary);
      opacity: 0.75;
    }

    &:hover:before {
      opacity: 1;
    }

    @media (max-width: 768px) {
      display: none !important;
    }
  }

  .slick-prev {
    left: -60px;

    @media (max-width: 1500px) {
      left: -40px;
    }
  }

  .slick-next {
    right: -60px;

    @media (max-width: 1500px) {
      right: -40px;
    }
  }

  .slick-track {
    display: flex;
    align-items: stretch;

    .slick-slide {
      height: auto;

      & > div {
        height: 100%;
      }
    }
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex !important;
  flex-direction: column;
  height: 100%;
  min-height: 320px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 24px;
    min-height: 280px;
  }
`;

const CardStarRating = styled.div`
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

const CTASection = styled.div`
  text-align: center;
  padding: 32px;
  background: white;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }

  p {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

const ReviewButton = styled.button`
  background: linear-gradient(135deg, var(--green-primary) 0%, var(--green-primary-deep) 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
  }

  @media (max-width: 768px) {
    padding: 14px 32px;
    font-size: 16px;
  }
`;
