import styled from 'styled-components';
import { useEffect, useState } from 'react';

export const GoTopButton = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(window.scrollY);
    });
  });

  return (
    <>
      {scrollHeight > 300 ? (
        <Container onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>&#8593;</Container>
      ) : null}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 2.5%;

  width: 48px;
  height: 48px;
  background-color: #e5e5e5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: rotate(90deg);
  transition: background-color 0.2s ease-in-out;

  svg {
    pointer-events: none;
    font-size: 20px;
  }

  :hover {
    background-color: #d5d5d5;
  }
`;
