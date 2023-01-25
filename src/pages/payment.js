import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Title, MainContent } from 'src/components';
import { Summary, MainContainer } from 'src/shared';
import { PaymentButton } from 'src/inputs';
import { actions } from 'src/redux/reducers/payment';
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
  const paymentStates = useSelector((state) => state.payment);
  const dispatch = useDispatch();
  const [currShipment, setCurrShipment] = useState(paymentStates.shipment.shipmentIndex);
  const [currPayment, setCurrPayment] = useState(paymentStates.payment.paymentIndex);

  function onSubmit() {
    if (currShipment === -1) {
      alert('Please select shipment');
    } else if (currPayment === -1) {
      alert('Please select payment');
    }
    const shipment = SHIPMENT_LIST.find((item) => item.id === currShipment);
    const payment = PAYMENT_LIST.find((item) => item.id === currPayment);

    console.log({ shipment, payment, currShipment, currPayment });
    dispatch(
      actions.setShipmentData({
        name: shipment.name,
        price: shipment.price,
        estimate: shipment.estimate,
        shipmentIndex: currShipment,
      })
    );
    dispatch(
      actions.setPaymentData({
        name: payment.name,
        paymentIndex: currPayment,
      })
    );
    navigate('/finish');
  }

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
      <Summary onBtnClick={onSubmit} displayButton buttonText="Pay with e-wallet" />
    </MainContainer>
  );
}
