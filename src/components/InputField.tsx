import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

interface InputProps {
  label?: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'file';
  name: string;
  placeholder: string;
  required?: boolean;
  index?: number;
}

export const InputField = (props: InputProps) => {
  const { label, type, name, placeholder, required, index = 0 } = props;

  return (
    <InputWrapper {...FADE_IN_WHILE_IN_VIEW({ index })}>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} name={name} placeholder={placeholder} required={required} />
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

  input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e2e1de;
    font-size: 16px;
    background-color: #f7f5f2;
    color: #303030;
    outline: none;

    &::placeholder {
      color: #4d4d4d;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
