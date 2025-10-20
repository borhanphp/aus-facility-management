import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

interface Props {
  label?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  index?: number;
}

export const Textarea = (props: Props) => {
  const { label, name, placeholder, required, index = 0 } = props;

  return (
    <TextareaWrapper {...FADE_IN_WHILE_IN_VIEW({ index })}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea name={name} placeholder={placeholder} required={required} rows={4} />
    </TextareaWrapper>
  );
};

const TextareaWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  textarea {
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
