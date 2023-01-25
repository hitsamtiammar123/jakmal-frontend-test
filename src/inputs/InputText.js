import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Controller } from 'react-hook-form';
import { Flex, Text, Icon } from 'src/components';

const inputStyle = css`
  background: transparent;
  border: none;
  outline: none;
  color: #2d2a40;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
`;

const Input = styled.input`
  ${inputStyle}
`;

const TextArea = styled.textarea`
  ${inputStyle}
`;

const InputPlaceholder = styled(Text)`
  position: absolute;
  transition: all 0.2s;
  font-size: 1rem;

  &.focused {
    transform: translateY(-12px);
    font-size: 0.86rem;
    color: ${(props) => {
      switch (props.type) {
        case 'success':
          return '#1BD97B';
        case 'error':
          return '#FF8A00';
      }
      return '#CCCCCC';
    }};
  }
`;

const Container = styled(Flex)`
  font-family: 'Inter';
`;

const REGISTERED_INPUTS = [];

export default function ({
  type,
  placeholder,
  textarea,
  rules,
  control,
  name,
  onChange,
  ...props
}) {
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef();
  const inputIndex = useRef(-1);
  const value = control._formValues[name];

  function getBorder() {
    switch (type) {
      case 'success':
        return '1px solid #1BD97B';
      case 'error':
        return '1px solid #FF8A00';
    }
    return '1px solid #CCCCCC';
  }

  useEffect(() => {
    if (input.current) {
      inputIndex.current = REGISTERED_INPUTS.length;
      input.current.toogleFocusOut = toogleFocusOut;
      REGISTERED_INPUTS.push(input.current);
    }

    if (value) {
      onFocus();
    }

    return () => {
      REGISTERED_INPUTS.splice(inputIndex.current, 1);
    };
  }, []);

  function clearFocusOtherElements() {
    for (let i = 0; i < REGISTERED_INPUTS.length; i++) {
      const elem = REGISTERED_INPUTS[i];
      const value = control._formValues[elem.name];
      if (i !== inputIndex.current && !value) {
        elem.toogleFocusOut();
      }
    }
  }

  function onFocus() {
    setIsFocused(true);
  }

  function toogleFocusOut() {
    setIsFocused(false);
  }

  function onBlur() {
    const value = control._formValues[name];
    if (!value) {
      setIsFocused(false);
      clearFocusOtherElements();
    }
  }

  function getIcon() {
    switch (type) {
      case 'success':
        return <Icon name="checkmark-outline" color="#1BD97B" />;
      case 'error':
        return <Icon name="close-outline" color="#FF8A00" />;
    }
    return null;
  }

  function onContainerFocus() {
    input.current.focus();
  }

  return (
    <Container
      minHeight="40px"
      padding="15px 12px 0px"
      direction="row"
      border={getBorder()}
      onClick={onContainerFocus}
      width="100%"
      {...props}
    >
      <Flex width="100%" direction="row">
        <InputPlaceholder type={type} className={isFocused ? 'focused' : ''}>
          {placeholder}
        </InputPlaceholder>
        {textarea ? (
          <Controller
            control={control}
            name={name}
            rules={rules}
            render={(props) => {
              const { field } = props;
              return (
                <TextArea
                  {...field}
                  value={field.value}
                  ref={input}
                  onChange={(e) => {
                    field.onChange(e);
                    typeof onChange === 'function' && onChange(e, name);
                  }}
                  onBlur={onBlur}
                  onFocus={onFocus}
                />
              );
            }}
          />
        ) : (
          <Controller
            control={control}
            name={name}
            rules={rules}
            render={(props) => {
              const { field } = props;
              return (
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    typeof onChange === 'function' && onChange(e, name);
                  }}
                  value={field.value}
                  ref={input}
                  onBlur={onBlur}
                  onFocus={onFocus}
                />
              );
            }}
          />
        )}
      </Flex>
      {isFocused && getIcon()}
    </Container>
  );
}
