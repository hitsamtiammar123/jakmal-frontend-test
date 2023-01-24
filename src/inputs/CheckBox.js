import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Icon } from 'src/components';

const CheckBoxElem = styled.div`
  width: ${(props) => props.size || '20px'};
  height: ${(props) => props.size || '20px'};
  border-width: ${(props) => props.borderWidth || '2px'};
  border-style: solid;
  border-color: ${(props) => props.color || '#1BD97B'};
`;

const Container = styled(Flex)`
  font-family: 'Inter';
  cursor: pointer;
`;

export default function ({ checked, color, size, borderWidth, text, onClick }) {
  return (
    <Container onClick={onClick} alignItems="center" direction="row">
      <CheckBoxElem color={color} size={size} borderWidth={borderWidth}>
        {checked && <Icon name="checkmark-outline" color={color} />}
      </CheckBoxElem>
      <Text marginLeft="9px" fontSize="14px">
        {text}
      </Text>
    </Container>
  );
}
