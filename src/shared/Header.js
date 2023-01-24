import React from 'react';
import styled from 'styled-components';
import { Flex, Icon, Text } from 'src/components';

const Header = styled(Flex).attrs({
  direction: 'row',
  justifyContent: 'center',
})`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 30px 40px 0px;
`;

const HeaderTab = styled(Flex).attrs((props) => ({
  direction: 'row',
  ...props,
}))`
  width: ${(props) => props.width};
`;

const SecondTab = styled(HeaderTab).attrs({
  alignItems: 'center',
})`
  background-color: #fffae6;
  && {
    height: 70px;
  }
  border-radius: 35px;
  transform: translateY(-60px);
  padding: 0px 38px;
  position: absolute;
`;

const Circle = styled(Flex).attrs({
  alignItems: 'center',
  justifyContent: 'center',
})`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${(props) => (props.active ? 'white' : '#FF8A00')};
  opacity: ${(props) => (props.active ? '1' : '0.2')};
  background-color: #ff8a00;
`;

const STEPS = [
  { name: 'Delivery', href: '#' },
  { name: 'Payment', href: '#' },
  { name: 'Finish', href: '#' },
];

export default function MainHeader() {
  return (
    <Header>
      <HeaderTab flex="1">
        <Flex direction="row">
          <Icon size="18px" name="arrow-back-outline" />
          <Text marginLeft="10px">Back to cart</Text>
        </Flex>
      </HeaderTab>
      <SecondTab justifyContent="space-between" flex="1">
        {STEPS.map((step, index) => (
          <Flex key={index} direction="row" alignItems="center" marginRight="21px">
            <Flex minWidth="192px" alignItems="center" direction="row" flex="1">
              <Circle active>{index + 1}</Circle>
              <Text marginLeft="10px" color="#FF8A00" fontSize="16px">
                {step.name}
              </Text>
            </Flex>
            <a href={step.href}>
              <Icon color="#FF8A00" name="chevron-forward-outline" />
            </a>
          </Flex>
        ))}
      </SecondTab>
      <HeaderTab flex="1" />
    </Header>
  );
}
