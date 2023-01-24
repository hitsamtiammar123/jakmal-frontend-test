import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MainContainer as BaseMainContainer, Flex } from 'src/components';
import { Header } from 'src/shared';

const Body = styled(Flex)`
  margin-left: 40px;
  margin-top: 37px;
  flex-direction: row;
`;

export default function MainContainer({
  children,
  activeIndex,
  displayBackButton,
  backButtonText,
}) {
  return (
    <BaseMainContainer>
      <Header
        displayBackButton={displayBackButton}
        backButtonText={backButtonText}
        activeIndex={activeIndex}
      />
      <Body>{children}</Body>
    </BaseMainContainer>
  );
}

MainContainer.defaultProps = {
  activeIndex: -1,
  backButtonText: 'Back',
  displayBackButton: true,
  children: [],
};

MainContainer.propTypes = {
  activeIndex: PropTypes.number,
  backButtonText: PropTypes.string,
  displayBackButton: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node),
};
