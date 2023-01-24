import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Flex, Icon, Text } from 'src/components';

const Container = styled(Flex)`
  cursor: pointer;
`;

export default function BackButtonContainer({ backButtonText, onBtnClick }) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => (onBtnClick ? onBtnClick() : navigate(-1))} direction="row">
      <Icon size="18px" name="arrow-back-outline" />
      <Text marginLeft="10px">{backButtonText}</Text>
    </Container>
  );
}

BackButtonContainer.defaultProps = {
  backButtonText: 'Back',
  onBtnClick: null,
};

BackButtonContainer.propTypes = {
  backButtonText: PropTypes.string,
  onBtnClick: PropTypes.func,
};
