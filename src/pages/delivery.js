import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Flex, Title, MainContent } from 'src/components';
import { CheckBox, InputText as BaseInputText } from 'src/inputs';
import { Summary, MainContainer } from 'src/shared';

const InputText = styled(BaseInputText)`
  margin-bottom: 10px;
`;

export default function Delivery() {
  const navigate = useNavigate();
  const [isDropship, setIsDropship] = useState(true);

  return (
    <MainContainer backButtonText="Back to cart" activeIndex={1}>
      <MainContent>
        <Flex direction="row" justifyContent="space-between">
          <Title>Delivery details</Title>
          <CheckBox
            checked={isDropship}
            onClick={() => setIsDropship(!isDropship)}
            color="#1BD97B"
            text="Send as Dropshipper"
          />
        </Flex>
        <Flex marginTop="36px" direction="row">
          <Flex flex="2" marginRight="40px">
            <InputText value="" placeholder="Email" />
            <InputText type="success" value="" placeholder="Phone Number" />
            <InputText minHeight="120px" textarea value="" placeholder="Delivery Address" />
          </Flex>
          <Flex flex="1" marginRight="40px">
            <InputText value="" placeholder="Dropshipper name" />
            <InputText type="error" value="" placeholder="Dropshipper phone number" />
          </Flex>
        </Flex>
      </MainContent>
      <Summary
        onBtnClick={() => navigate('/payment')}
        displayButton
        buttonText="Continue to payment"
      />
    </MainContainer>
  );
}
