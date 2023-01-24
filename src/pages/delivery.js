import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'src/components';
import { CheckBox } from 'src/inputs';

const Title = styled(Text).attrs({
  fontWeight: 'bold',
  color: '#FF8A00',
  size: '26px',
})``;

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
        <Flex direction="row"></Flex>
      </Flex>
      <Flex borderLeft="1px solid #FF8A00" paddingLeft="19px" flex="1">
        <Title>Summary</Title>
      </Flex>
    </Flex>
  );
}
