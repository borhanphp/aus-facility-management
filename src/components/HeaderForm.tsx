import axios from 'axios';
import { useState } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

import { Textarea } from './Textarea';
import { InputField } from './InputField';
import { DatePicker } from './DatePicker';
import { MultiSelectInput } from './MultiSelect';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

export const HeaderForm = () => {
  const [selectedServices, setSelectedServices] = useState<{ label: string; value: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [submitting, setSubmitting] = useState(false);

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
    <HeaderFormContainer onSubmit={handleSubmit}>
      <motion.p {...FADE_IN_WHILE_IN_VIEW({ index: 0, as: motion.p })}>Request a Free Quote</motion.p>
      <InputField type="text" name="name" placeholder="Your Name" required index={1} />
      <InputField type="email" name="email" placeholder="Your Email" required index={2} />
      <InputField type="tel" name="phone" placeholder="Your Phone Number" required index={3} />
      <MultiSelectInput
        setSelectedServices={setSelectedServices}
        selectedServices={selectedServices}
        name="services"
        placeholder="Select preferred services"
        required
        index={4}
      />
      <DatePicker
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        name="date"
        placeholder="Select date"
        index={5}
        required
      />

      <Textarea name="additionalInformation" placeholder="Write Additional Information" index={7} />

      <motion.button {...FADE_IN_WHILE_IN_VIEW({ index: 8, as: motion.button })} type="submit" disabled={submitting}>
        {submitting ? 'SUBMITTING...' : 'SEND NOW'}
      </motion.button>
    </HeaderFormContainer>
  );
};

const HeaderFormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  & > p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 20px;
      font-weight: 300;
    }
  }

  input,
  textarea {
    background-color: transparent !important;
    color: white;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: #e2e1de !important;
    }
  }

  svg {
    color: #e2e1de !important;
    fill: #e2e1de !important;
  }

  && [class$='-control'],
  .file-uploader {
    background-color: transparent;

    label {
      color: #e2e1de;
    }
  }

  &&&& [class$='-placeholder'] {
    color: #e2e1de;
  }

  & > button {
    width: 100%;
    padding: 12px 24px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0em;
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
