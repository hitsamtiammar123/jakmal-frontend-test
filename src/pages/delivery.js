import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'src/components';
import { CheckBox, InputText as BaseInputText } from 'src/inputs';

const Title = styled(Text).attrs({
  fontWeight: 'bold',
  color: '#FF8A00',
  fontSize: '26px',
})``;

const InputText = styled(BaseInputText)`
  margin-bottom: 10px;
`;

export default function Delivery() {
  const [isDropship, setIsDropship] = useState(true);
  return (
    <Flex flex="1" marginBottom="20px" direction="row">
      <Flex marginRight="30px" flex="2">
        <Flex direction="row" justifyContent="space-between">
          <Title>Delivery details</Title>
          <CheckBox
            checked={isDropship}
            onClick={() => setIsDropship(!isDropship)}
            color="#1BD97B"
            text="Send as Dropshipper"
          />
        </Flex>
        <Flex marginTop="36px" direction="row">
          <Flex flex="2" marginRight="40px">
            <InputText value="" placeholder="Email" />
            <InputText type="success" value="" placeholder="Phone Number" />
            <InputText textarea value="" placeholder="Delivery Address" />
          </Flex>
          <Flex flex="1" marginRight="40px">
            <InputText value="" placeholder="Dropshipper name" />
            <InputText type="error" value="" placeholder="Dropshipper phone number" />
          </Flex>
        </Flex>
      </Flex>
      <Flex borderLeft="1px solid #FF8A00" paddingLeft="19px" flex="1">
        <Title>Summary</Title>
      </Flex>
    </Flex>
  );
}
