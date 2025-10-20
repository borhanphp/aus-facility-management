import Select from 'react-select';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { MAIN_SERVICES } from '../constants/others';
import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

interface Props {
  setSelectedServices: (services: { label: string; value: string }[]) => void;
  selectedServices: { label: string; value: string }[];
  label?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  index?: number;
}

export const MultiSelectInput = (props: Props) => {
  const { label, name, placeholder, required, setSelectedServices, index = 0, selectedServices } = props;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <InputWrapper {...FADE_IN_WHILE_IN_VIEW({ index })}>
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        className="react-select"
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
        isMulti
        menuShouldScrollIntoView
        options={MAIN_SERVICES?.map((service) => ({ value: service, label: service }))}
        placeholder={placeholder}
        required={required}
        onChange={(e) => {
          setSelectedServices(e.map((service) => service));
        }}
        value={selectedServices}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  .react-select > div {
    background-color: #f7f5f2;
    color: #303030;
    padding: 4px 0;
    border-radius: 8px;
  }

  .react-select [class$='-placeholder'] {
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 300;
  }
`;
