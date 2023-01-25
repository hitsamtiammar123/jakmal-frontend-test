import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, Title, MainContent as BaseMainContent } from 'src/components';
import { Summary, MainContainer } from 'src/shared';
import { actions } from 'src/redux/reducers/delivery';
import { actions as paymentActions } from 'src/redux/reducers/payment';
import BaseBackButtonContainer from 'src/shared/BackButtonContainer';

const BackButtonContainer = styled(BaseBackButtonContainer)`
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const MainContent = styled(BaseMainContent).attrs({
  justifyContent: 'center',
  alignItems: 'center',
})`
  font-family: 'Inter';
  color: black;
  font-size: 14px;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export default function Delivery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shipmentStates = useSelector((state) => state.payment.shipment);
  const orderID = useSelector((state) => state.cart.orderID);

  return (
    <MainContainer displayBackButton={false} activeIndex={3}>
      <MainContent>
        <Flex>
          <Title textAlign="left">Thank You</Title>
          <Flex marginBottom="52px" marginTop="26px">
            <Text fontWeight="bold" marginBottom="10px">
              Order ID : {orderID}
            </Text>
            <Text>
              Your order will be delivered {shipmentStates.estimate} with {shipmentStates.name}
            </Text>
          </Flex>
          <BackButtonContainer
            onBtnClick={() => {
              dispatch(actions.emptyValues());
              dispatch(paymentActions.emptyPaymentData());
              dispatch(paymentActions.emptyShipmentData());
              navigate('/delivery');
            }}
            backButtonText="Go to homepage"
          />
        </Flex>
      </MainContent>
      <Summary step={3} displayButton={false} buttonText="Continue to payment" />
    </MainContainer>
  );
}
