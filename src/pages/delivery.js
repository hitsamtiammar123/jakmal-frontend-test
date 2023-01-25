/* eslint-disable no-useless-escape */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Flex, Title, MainContent } from 'src/components';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CheckBox, InputText as BaseInputText } from 'src/inputs';
import { actions } from 'src/redux/reducers/delivery';
import { Summary, MainContainer } from 'src/shared';

const InputText = styled(BaseInputText)`
  margin-bottom: 10px;
`;

const DeliveryHeading = styled(Flex)`
  @media screen and (max-width: 425px) {
    flex-direction: column;

    ${Title} {
      margin-bottom: 20px;
    }

    ${InputText} {
      width: 100%;
    }
  }
`;

const InputMainContainer = styled(Flex)`
  @media screen and (max-width: 425px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const InputContainer = styled(Flex)`
  @media screen and (max-width: 425px) {
    flex: 1;
  }
`;

export default function Delivery() {
  const deliveryStates = useSelector((state) => state.delivery);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropship, setIsDropship] = useState(deliveryStates.sendAsDropshipper);
  const formRef = useRef();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: deliveryStates.email,
      phoneNumber: deliveryStates.phoneNumber,
      address: deliveryStates.address,
      dropshipperName: deliveryStates.dropshipperName,
      dropshipperPhoneNumber: deliveryStates.dropshipperPhoneNumber,
      sendAsDropshipper: isDropship,
    },
  });

  function onSubmit(d) {
    dispatch(actions.setValues({ ...d, sendAsDropshipper: isDropship }));
    navigate('/payment');
  }

  return (
    <MainContainer backButtonText="Back to cart" activeIndex={1}>
      <MainContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DeliveryHeading direction="row" justifyContent="space-between">
            <Title>Delivery details</Title>
            <CheckBox
              checked={isDropship}
              onClick={() => setIsDropship(!isDropship)}
              color="#1BD97B"
              text="Send as Dropshipper"
            />
          </DeliveryHeading>
          <InputMainContainer marginTop="36px" direction="row">
            <InputContainer flex="2" marginRight="40px">
              <InputText
                control={control}
                rules={{
                  required: 'Email must be filled',
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                }}
                name="email"
                placeholder="Email"
                type={!errors.email ? 'success' : 'error'}
              />
              <InputText
                control={control}
                name="phoneNumber"
                placeholder="Phone Number"
                rules={{
                  required: 'Phone number must be filled',
                  pattern: /^\+?\d+$/,
                }}
                type={!errors.phoneNumber ? 'success' : 'error'}
              />
              <InputText
                control={control}
                minHeight="120px"
                type={!errors.address ? 'success' : 'error'}
                rules={{
                  required: {
                    value: true,
                    message: 'Address must be filled',
                  },
                  maxLength: {
                    value: 120,
                    message: 'Address max length must be 120',
                  },
                }}
                textarea
                name="address"
                placeholder="Delivery Address"
              />
            </InputContainer>
            <InputContainer flex="1" marginRight="40px">
              <InputText
                control={control}
                name="dropshipperName"
                placeholder="Dropshipper name"
                type={!errors.dropshipperName ? 'success' : 'error'}
              />
              <InputText
                control={control}
                name="dropshipperPhoneNumber"
                placeholder="Dropshipper phone number"
                rules={{
                  required: 'Phone number must be filled',
                  pattern: /^\+?\d+$/,
                }}
                type={!errors.dropshipperPhoneNumber ? 'success' : 'error'}
              />
            </InputContainer>
          </InputMainContainer>
          <input ref={formRef} style={{ display: 'none' }} type="submit" />
        </form>
      </MainContent>
      <Summary
        step={1}
        onBtnClick={() => {
          formRef.current.click();
        }}
        displayButton
        buttonText="Continue to payment"
      />
    </MainContainer>
  );
}
