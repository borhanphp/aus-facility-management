import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LiaQuoteRightSolid } from 'react-icons/lia';

import { FADE_IN_WHILE_IN_VIEW } from '../../constants/animations';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    rating: 5,
    text: "Facing a plumbing emergency, I contacted Handyman, and they responded promptly. Their quick and efficient repair saved me from a potential disaster. I'm grateful for their reliable service and will definitely call on them for future needs.",
    name: 'Alex Peterson',
    service: 'PLUMBING SERVICE',
    image: '/images/review-1.png',
  },
  {
    rating: 5,
    text: "I've used Handyman for various repairs around my home, and they never disappoint. From fixing faucets to regular maintenance checks, their team is reliable and provides great customer service. It's a relief to have a trustworthy service.",
    name: 'Mark Rodriguez',
    service: 'KITCHEN RENOVATION',
    image: '/images/review-2.png',
  },
  {
    rating: 5,
    text: "Handyman turned my outdated bathroom into a spa-like retreat. The attention to detail, creative solutions, and professionalism were outstanding. I'm thrilled with the transformation and would choose them for any future projects.",
    name: 'Ryan Johnson',
    service: 'REMODELING PROJECT',
    image: '/images/review-3.png',
  },
  {
    rating: 5,
    text: "I signed up for Handyman's services, and it's been a great experience. Their team is thorough, and their checks have prevented many issues. It's comforting to know my home is in good hands. Great service!",
    name: 'Tom Benson',
    service: 'HOME REPAIR',
    image: '/images/review-4.png',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  adaptiveHeight: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ReviewsSection = () => (
  <TestimonialsSection>
    <div>
      <TitleWrapper>
        <motion.h3 {...FADE_IN_WHILE_IN_VIEW({ as: motion.h3 })}>What clients say about us</motion.h3>
        <motion.div {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.div })}>
          <LiaQuoteRightSolid />
        </motion.div>
      </TitleWrapper>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index + Math.random()}
            {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.div })}
            className="testimonial-card"
          >
            <div>
              <StarRating>{'★'.repeat(testimonial.rating)}</StarRating>
              <ReviewText>{testimonial.text}</ReviewText>
            </div>
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
                <h5>{testimonial.name}</h5>
                <p>{testimonial.service}</p>
              </ClientDetails>
            </ClientInfo>
          </TestimonialCard>
        ))}
      </Slider>
    </div>
  </TestimonialsSection>
);

const TestimonialsSection = styled.section`
  max-width: 100%;
  background-color: var(--green-primary-lighter);

  & > div {
    max-width: 1440px;
    margin: 0 auto;
    padding: 120px 72px;
    text-align: center;
    @media (max-width: 1440px) {
      padding: 40px 1.5%;
    }

    .slick-slider {
      padding-bottom: 10px;
    }

    .slick-track {
      display: flex;
      gap: 20px;
      align-items: stretch;

      @media (max-width: 1200px) {
        gap: 10px;
      }

      .slick-slide {
        height: auto;

        & > div {
          height: 100%;
        }
      }
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;

  @media (max-width: 1200px) {
    margin-bottom: 30px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  h3 {
    font-size: 48px;
    font-weight: 600;

    @media (max-width: 1200px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  svg {
    font-size: 40px;
    color: #1d5bcf;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

const TestimonialCard = styled(motion.div)`
  height: 100%;
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

const StarRating = styled.div`
  color: #ffcc00;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ClientImageWrapper = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  overflow: hidden;
  position: relative;
`;

const ClientDetails = styled.div`
  h5 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    color: #919191;
    letter-spacing: 1.2px;
  }
`;
