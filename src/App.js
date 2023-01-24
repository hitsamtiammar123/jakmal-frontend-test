import React from 'react';
import styled from 'styled-components';
import { Flex, Icon, Text } from './components';
import './App.css';

const Container = styled.div`
  margin: 55px 50px;
  background-color: white;
`;

const Header = styled(Flex).attrs({
  direction: 'row',
  justifyContent: 'center',
})`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 30px 40px;
`;

const HeaderTab = styled(Flex).attrs((props) => ({
  direction: 'row',
  ...props,
}))`
  width: ${(props) => props.width};
  height: 100%;
`;

const SecondTab = styled(HeaderTab).attrs({
  alignItems: 'center',
})`
  background-color: #fffae6;
  height: 70px;
  border-radius: 35px;
  transform: translateY(-45px);
  padding: 0px 38px;
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

function App() {
  function renderHeader() {
    return (
      <Header>
        <HeaderTab flex="1">
          <Flex direction="row">
            <Icon name="arrow-back-outline" />
            <Text marginLeft="10px" size="14px">
              Back to cart
            </Text>
          </Flex>
        </HeaderTab>
        <SecondTab justifyContent="space-between" flex="1">
          {STEPS.map((step, index) => (
            <Flex
              key={index}
              direction="row"
              alignItems="center"
              marginRight="21px"
            >
              <Flex
                minWidth="192px"
                alignItems="center"
                direction="row"
                flex="1"
              >
                <Circle active>{index + 1}</Circle>
                <Text marginLeft="10px" color="#FF8A00" size="16px">
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

  return <Container>{renderHeader()}</Container>;
}

export default App;
