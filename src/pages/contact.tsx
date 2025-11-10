import axios from 'axios';
import { useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import { Textarea } from '../components/Textarea';
import { InputField } from '../components/InputField';
import { DatePicker } from '../components/DatePicker';
import MotionWrapper from '../framer-motion/MotionWrapper';
import { MultiSelectInput } from '../components/MultiSelect';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<{ label: string; value: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [submitting, setSubmitting] = useState(false);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact AUS Facility Management',
    description: 'Get in touch with AUS Facility Management for all your facility service needs in Sydney',
    url: 'https://www.ausfacility.com.au/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'AUS Facility Management',
      url: 'https://www.ausfacility.com.au',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        areaServed: 'AU',
        availableLanguage: 'English',
      },
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
        name: 'Contact',
        item: 'https://www.ausfacility.com.au/contact',
      },
    ],
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const jsonData = Object.fromEntries(formData);

    const dataToSend = {
      ...jsonData,
      selectedServices: selectedServices?.map((service) => service.value)?.join(', '),
      userSelectedDate: selectedDate ? format(selectedDate, 'dd MMM yyyy') : null,
    };

    try {
      setSubmitting(true);
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjkvgrpl';
      await axios.post(FORMSPREE_ENDPOINT, dataToSend);
      toast.success('From submitted successfully!');

      // reset form
      (e.target as HTMLFormElement)?.reset();
      setSelectedServices([]);
      setSelectedDate(null);
    } catch (error: any) {
      console.log({ error });
      const message = error?.response?.data?.errors?.[0]?.message || 'Oops! Something went wrong!';
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <SEO
        title="Contact Us - AUS Facility Management Sydney"
        description="Contact AUS Facility Management for professional cleaning, pest control, lawn care, construction, and facility services in Sydney. Get a free quote today!"
        keywords="Contact AUS Facility Management, Sydney Facility Services Contact, Get Quote Sydney, Facility Management Enquiry, Sydney Services Contact"
        ogImage="https://www.ausfacility.com.au/images/home-2.jpg"
        canonicalUrl="https://www.ausfacility.com.au/contact"
      />
      <StructuredData data={contactPageSchema} />
      <StructuredData data={breadcrumbSchema} />

      <MotionWrapper>
        <Container>
          <motion.h2 {...FADE_IN_WHILE_IN_VIEW({ index: 0, as: motion.h2 })}>Send Us A Message</motion.h2>
          <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 1, as: motion.p })}>
            We’re here to help—reach out with your questions or inquiries, and we’ll get back to you soon!
          </motion.p>

          <FormContainer>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <InputField
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                  index={1}
                />
                <InputField
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  index={2}
                />
              </div>
              <InputField
                label="Email Address"
                type="email"
                name="email"
                placeholder="Enter email address"
                required
                index={3}
              />
              <InputField
                label="Phone Number"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                required
                index={4}
              />
              <MultiSelectInput
                setSelectedServices={setSelectedServices}
                selectedServices={selectedServices}
                label="Preferred Services"
                name="services"
                placeholder="Select preferred services"
                required
                index={5}
              />
              <DatePicker
                setSelectedDate={setSelectedDate}
                selectedDate={selectedDate}
                label="Date"
                name="userSelectedDate"
                placeholder="Select date"
                required
                index={6}
              />
              <Textarea
                label="Additional Information"
                name="additionalInformation"
                placeholder="Write your additional information here"
                index={8}
              />

              <ButtonContainer {...FADE_IN_WHILE_IN_VIEW({ index: 9 })}>
                <button type="submit" disabled={submitting}>
                  {submitting ? 'SUBMITTING...' : 'SEND NOW'}
                </button>
              </ButtonContainer>
            </form>
          </FormContainer>
        </Container>
      </MotionWrapper>
    </>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 72px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1440px) {
    padding: 40px 1.5%;
  }

  @media (max-width: 1200px) {
    gap: 10px;
  }

  & > h2 {
    font-size: 48px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 1200px) {
      font-size: 30px;
    }
  }
  & > p {
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    max-width: 695px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
`;

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 1200px) {
      gap: 14px;
    }
  }

  .form-group {
    display: flex;
    gap: 24px;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 14px;
    }
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;

  button {
    width: 332px;
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background-color: var(--green-primary);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--green-primary-deep);
    }

    &[disabled] {
      background-color: grey;
      cursor: not-allowed;
    }
  }
`;
