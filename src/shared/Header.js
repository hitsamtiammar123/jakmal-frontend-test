import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Icon, Text } from 'src/components';
import BackButtonContainer from './BackButtonContainer';

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
  color: ${(props) => (props.active ? 'white' : '#ff8a00')};
  background-color: ${(props) => (props.active ? 'rgba(255, 138,0, 1)' : 'rgba(255, 138, 0, 0.2)')};
`;

const STEPS = [
  { name: 'Delivery', href: '/delivery' },
  { name: 'Payment', href: '/payment' },
  { name: 'Finish', href: '/finish' },
];

export default function MainHeader({ activeIndex, backButtonText, displayBackButton }) {
  return (
    <Header>
      <HeaderTab flex="1">
        {displayBackButton && <BackButtonContainer backButtonText={backButtonText} />}
      </HeaderTab>
      <SecondTab justifyContent="space-between" flex="1">
        {STEPS.map((step, index) => (
          <Flex key={index} direction="row" alignItems="center" marginRight="21px">
            <Flex minWidth="192px" alignItems="center" direction="row" flex="1">
              <Circle active={index < activeIndex}>{index + 1}</Circle>
              <Text marginLeft="10px" color="#FF8A00" fontSize="16px">
                {step.name}
              </Text>
            </Flex>
            <span>
              <Icon color="#FF8A00" name="chevron-forward-outline" />
            </span>
          </Flex>
        ))}
      </SecondTab>
      <HeaderTab flex="1" />
    </Header>
  );
}

MainHeader.defaultProps = {
  activeIndex: -1,
  backButtonText: 'Back',
  displayBackButton: true,
};

MainHeader.propTypes = {
  activeIndex: PropTypes.number,
  backButtonText: PropTypes.string,
  displayBackButton: PropTypes.bool,
};
