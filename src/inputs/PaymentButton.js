import React from 'react';
import styled from 'styled-components';
import { Text, Flex, Icon } from 'src/components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  padding: 12px 15px;
  background: #ffffff;
  border: 1px solid #cccccc;
  height: 60px;
  min-width: 180px;
  justify-content: space-between;
  cursor: pointer;

  &.active {
    background: rgba(27, 217, 123, 0.1);
    border: 2px solid #1bd97b;
  }
`;

export default function PaymentButton({ isActive, onClick, title, description }) {
  return (
    <Button onClick={onClick} className={isActive ? 'active' : ''}>
      <Flex alignItems="start">
        <Text marginBottom="3px" fontSize="13px" color="#000000">
          {title}
        </Text>
        {description && (
          <Text fontWeight="bold" fontSize="16px" color="#2D2A40">
            {description}
          </Text>
        )}
      </Flex>
      {isActive && <Icon name="checkmark-outline" color="#1BD97B" />}
    </Button>
  );
}
