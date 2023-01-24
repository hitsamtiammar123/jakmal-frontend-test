import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'src/components';

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

  &:hover {
    background-color: #faae55;
  }
`;

export default function Summary() {
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

  return (
    <Container>
      <Flex>
        <Title>Summary</Title>
        <TextGrey opacity="0.6" marginTop="10px" marginBottom="22px" fontSize="14px">
          10 items purchased
        </TextGrey>
        {renderSummaryDetailRow('Delivery Estimation', 'today by GO-SEND')}
        {renderSummaryDetailRow('Payment Method', 'Bank Transfer')}
      </Flex>
      <Flex>
        {renderDetailRow('Cost of goods', '$500,000')}
        {renderDetailRow('Dropshipping Fee', '$500,000')}
        {renderDetailRow(
          <span>
            <Text fontWeight="bold">Go Send</Text> Shipment
          </span>,
          '$500,000'
        )}
        <TextContainer marginTop="25px">
          <Flex flex="1">
            <Title>Total</Title>
          </Flex>
          <Flex flex="1">
            <Title>505,900</Title>
          </Flex>
        </TextContainer>
        <MainButton>Continue to Payment</MainButton>
      </Flex>
    </Container>
  );
}
