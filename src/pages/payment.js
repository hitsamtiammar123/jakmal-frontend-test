import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Flex, Title, MainContent } from 'src/components';
import { Summary, MainContainer } from 'src/shared';
import { PaymentButton } from 'src/inputs';
import { PAYMENT_LIST, SHIPMENT_LIST } from 'src/constants';

const Container = styled(Flex)`
  margin-bottom: 60px;
`;

const ButtonContainer = styled(Flex).attrs({
  direction: 'row',
})`
  margin-top: 30px;
`;

export default function Payment() {
  const navigate = useNavigate();
  const [currShipment, setCurrShipment] = useState(-1);
  const [currPayment, setCurrPayment] = useState(-1);

  return (
    <MainContainer backButtonText="Back to delivery" activeIndex={2}>
      <MainContent>
        <Container>
          <Title>Shipment</Title>
          <ButtonContainer>
            {SHIPMENT_LIST.map((item) => (
              <PaymentButton
                isActive={item.id === currShipment}
                key={item.id}
                title={item.name}
                description={item.price}
                onClick={() => setCurrShipment(item.id)}
              />
            ))}
          </ButtonContainer>
        </Container>
        <Container>
          <Title>Payment</Title>
          <ButtonContainer>
            {PAYMENT_LIST.map((item) => (
              <PaymentButton
                isActive={item.id === currPayment}
                key={item.id}
                title={item.name}
                description={item.description}
                onClick={() => setCurrPayment(item.id)}
              />
            ))}
          </ButtonContainer>
        </Container>
      </MainContent>
      <Summary
        onBtnClick={() => navigate('/finish')}
        displayButton
        buttonText="Pay with e-wallet"
      />
    </MainContainer>
  );
}
