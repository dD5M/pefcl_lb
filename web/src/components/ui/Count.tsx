import styled from '@emotion/styled';
import theme from '@utils/theme';
import React from 'react';

const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 2rem;
  padding: 0 0.73rem;

  border-radius: ${theme.spacing(1)};
  font-weight: ${theme.typography.fontWeightBold};
  background-color: ${theme.palette.background.light4};
`;

interface CountProps {
  amount: string | number;
}
const Count = ({ amount }: CountProps) => {
  return (
    <div>
      <Total>{amount}</Total>
    </div>
  );
};

export default Count;
