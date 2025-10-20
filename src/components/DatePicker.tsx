import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactDatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';

import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  setSelectedDate: (date: Date | null) => void;
  selectedDate: Date | null;
  required?: boolean;
  name: string;
  label?: string;
  placeholder: string;
  index?: number;
}

export const DatePicker = (props: Props) => {
  const { label, name, placeholder, required, setSelectedDate, selectedDate, index = 0 } = props;

  return (
    <DateInputWrapper {...FADE_IN_WHILE_IN_VIEW({ index })}>
      {label && <label htmlFor={name}>{label}</label>}
      <ReactDatePicker
        selected={selectedDate}
        showYearDropdown
        scrollableYearDropdown
        isClearable
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder}
        required={required}
        onChange={(date: Date) => setSelectedDate(date)}
        popperPlacement="bottom-start"
      />

      <DateIcon $withLabel={label ? true : false}>
        <FaRegCalendarAlt />
      </DateIcon>
    </DateInputWrapper>
  );
};

const DateInputWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 6px;
  }

  input {
    width: 100%;
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

const DateIcon = styled.div<{ $withLabel: boolean }>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  pointer-events: none;

  ${({ $withLabel }) => $withLabel && `top: 70%;`}
`;
