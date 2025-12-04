import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  serviceName: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, serviceName }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQContainer>
        <h2>Frequently Asked Questions - {serviceName}</h2>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <IconWrapper $isOpen={openIndex === index}>
                  <FaChevronDown />
                </IconWrapper>
              </FAQQuestion>
              <AnimatePresence>
                {openIndex === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContainer>
    </>
  );
};

const FAQContainer = styled.section`
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
    color: #333;

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

const FAQList = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const FAQQuestion = styled.div`
  padding: 24px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin: 0;
    flex: 1;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const IconWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-primary);
  transition: transform 0.3s;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};

  svg {
    font-size: 20px;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 24px 24px;
  overflow: hidden;

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 16px 16px;
  }
`;

