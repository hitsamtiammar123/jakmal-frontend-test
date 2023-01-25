import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Icon, Text } from 'src/components';
import BaseBackButtonContainer from './BackButtonContainer';

const BackButtonContainer = styled(BaseBackButtonContainer)`
  @media screen and (max-width: 1024px) {
    margin-left: 37px;
    margin-top: 20px;
  }

  @media screen and (max-width: 425px) {
    margin: 10px;
  }
`;

const Header = styled(Flex).attrs({
  direction: 'row',
  justifyContent: 'center',
})`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 30px 40px 0px;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

const HeaderTab = styled(Flex).attrs((props) => ({
  direction: 'row',
  ...props,
}))`
  width: ${(props) => props.width};
`;

const FirstTab = styled(HeaderTab)``;

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

  @media screen and (max-width: 1024px) {
    position: relative;
    width: 100%;
    /* padding-right: 7%; */
    transform: translateY(0);
    padding: 10px;
    border-radius: 0;

    .title {
      margin-left: 17px;
    }
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
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

const SecondTabElem = styled(Flex)`
  @media screen and (max-width: 768px) {
    flex: 1;
    .first {
      flex: 1;
    }
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export default function MainHeader({ activeIndex, backButtonText, displayBackButton }) {
  return (
    <Header>
      <FirstTab flex="1">
        {displayBackButton && <BackButtonContainer backButtonText={backButtonText} />}
      </FirstTab>
      <SecondTab justifyContent="space-between" flex="1">
        {STEPS.map((step, index) => (
          <SecondTabElem key={index} direction="row" alignItems="center" marginRight="21px">
            <Flex className="first" minWidth="192px" alignItems="center" direction="row" flex="1">
              <Circle active={index < activeIndex}>{index + 1}</Circle>
              <Text marginLeft="10px" color="#FF8A00" fontSize="16px">
                {step.name}
              </Text>
            </Flex>
            <span className="second">
              <Icon color="#FF8A00" name="chevron-forward-outline" />
            </span>
          </SecondTabElem>
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
