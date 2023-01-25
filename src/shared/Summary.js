import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Flex, Text } from 'src/components';
import { formatNumber } from 'src/shared/utils';

const Container = styled(Flex)`
  justify-content: space-between;
  border-left: 1px solid #ff8a00;
  padding: 20px;
  flex: 1;
`;

const Title = styled(Text).attrs({
  fontWeight: 'bold',
  color: '#FF8A00',
  fontSize: '24px',
})``;

const TextInter = styled(Text)`
  font-family: 'Inter';
`;

const TextGrey = styled(TextInter)`
  opacity: 0.6;
`;

const TextDetailContent = styled(TextInter)`
  font-size: 14px;
  color: black;
  font-weight: bold;
`;

const TextDetailTitle = styled(TextDetailContent)`
  font-weight: normal;
  opacity: 0.6;
`;

const TextContainer = styled(Flex)`
  margin-bottom: 14px;
  flex-direction: row;
`;

const TextSummaryTitle = styled(TextInter)`
  font-size: 16px;
  color: black;
`;

const TextSummaryContent = styled(TextInter)`
  color: #1bd97b;
  font-weight: bold;
`;

const TextSummaryContainer = styled(Flex)`
  padding-top: 21px;
  margin-bottom: 22px;
`;

const Separator = styled.span`
  background: #d8d8d8;
  height: 1px;
  width: 80px;
`;

const MainButton = styled.button`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff8a00;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
  border-radius: 2px;
  color: white;
  font-size: 18px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #faae55;
  }
`;

export default function Summary({ buttonText, onBtnClick, displayButton, step }) {
  const paymentStates = useSelector((state) => state.payment);
  const deliveryStates = useSelector((state) => state.delivery);
  const cartStates = useSelector((state) => state.cart);

  const payment = paymentStates.payment;
  const shipment = paymentStates.shipment;

  function renderSummaryDetailRow(title, content) {
    return (
      <>
        <Separator />
        <TextSummaryContainer>
          <TextSummaryTitle marginBottom="5px">{title}</TextSummaryTitle>
          <TextSummaryContent>{content}</TextSummaryContent>
        </TextSummaryContainer>
      </>
    );
  }

  function renderDetailRow(title, detail) {
    return (
      <TextContainer>
        <Flex flex="1">
          <TextDetailTitle>{title}</TextDetailTitle>
        </Flex>
        <Flex flex="1">
          <TextDetailContent>{detail}</TextDetailContent>
        </Flex>
      </TextContainer>
    );
  }

  function getDropshipFee() {
    return deliveryStates.sendAsDropshipper ? 5900 : 0;
  }

  function getDeliveryEstimation() {
    return `${shipment.estimate} by ${shipment.name}`;
  }

  function getTotal() {
    console.log({ shipment, cartStates });
    return cartStates.price + getDropshipFee() + shipment.price;
  }

  return (
    <Container>
      <Flex>
        <Title>Summary</Title>
        <TextGrey opacity="0.6" marginTop="10px" marginBottom="22px" fontSize="14px">
          {cartStates.amount} items purchased
        </TextGrey>
        {[3].includes(step) &&
          renderSummaryDetailRow('Delivery Estimation', getDeliveryEstimation())}
        {[3].includes(step) && renderSummaryDetailRow('Payment Method', payment.name)}
      </Flex>
      <Flex>
        {renderDetailRow('Cost of goods', formatNumber(cartStates.price))}
        {renderDetailRow('Dropshipping Fee', formatNumber(getDropshipFee()))}
        {[3].includes(step) &&
          renderDetailRow(
            <span>
              <Text fontWeight="bold">{shipment.name}</Text> Shipment
            </span>,
            formatNumber(shipment.price)
          )}
        <TextContainer marginTop="25px">
          <Flex flex="1">
            <Title>Total</Title>
          </Flex>
          <Flex flex="1">
            <Title>{formatNumber(getTotal())}</Title>
          </Flex>
        </TextContainer>
        {displayButton && <MainButton onClick={onBtnClick}>{buttonText || 'Continue'}</MainButton>}
      </Flex>
    </Container>
  );
}
