import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Flex, Text, Title, MainContent as BaseMainContent } from 'src/components';
import { Summary, MainContainer } from 'src/shared';
import BackButtonContainer from 'src/shared/BackButtonContainer';

const MainContent = styled(BaseMainContent).attrs({
  justifyContent: 'center',
  alignItems: 'center',
})`
  font-family: 'Inter';
  color: black;
  font-size: 14px;
`;

export default function Delivery() {
  const navigate = useNavigate();
  return (
    <MainContainer displayBackButton={false} activeIndex={3}>
      <MainContent>
        <Flex>
          <Title textAlign="left">Thank You</Title>
          <Flex marginBottom="52px" marginTop="26px">
            <Text fontWeight="bold" marginBottom="10px">
              Order ID : XXKYB
            </Text>
            <Text>Your order will be delivered today with GO-SEND</Text>
          </Flex>
          <BackButtonContainer
            onBtnClick={() => navigate('/delivery')}
            backButtonText="Go to homepage"
          />
        </Flex>
      </MainContent>
      <Summary displayButton={false} buttonText="Continue to payment" />
    </MainContainer>
  );
}
