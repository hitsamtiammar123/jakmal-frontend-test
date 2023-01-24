import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
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

const REGISTERED_INPUTS = [];

export default function ({ type, placeholder, onChange, value, textarea, ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef();
  const inputIndex = useRef(-1);

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
    if (value) {
      onFocus();
    }
    if (input.current) {
      inputIndex.current = REGISTERED_INPUTS.length;
      input.current.toogleFocusOut = toogleFocusOut;
      REGISTERED_INPUTS.push(input.current);
      console.log({ REGISTERED_INPUTS });
    }

    return () => {
      REGISTERED_INPUTS.splice(inputIndex.current, 1);
    };
  }, []);

  function clearFocusOtherElements() {
    for (let i = 0; i < REGISTERED_INPUTS.length; i++) {
      const elem = REGISTERED_INPUTS[i];
      if (i !== inputIndex.current) {
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
    <Flex
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
          <TextArea
            ref={input}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        ) : (
          <Input ref={input} onChange={onChange} value={value} onBlur={onBlur} onFocus={onFocus} />
        )}
      </Flex>
      {isFocused && getIcon()}
    </Flex>
  );
}
