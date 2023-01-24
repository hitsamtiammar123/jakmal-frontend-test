import React from 'react';
import styled from 'styled-components';

export const Base = styled.div`
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-color: ${(props) => props.borderColor};
`;

export const Flex = styled(Base)`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: ${(props) => props.alignItems || 'stretch'};
  flex: ${(props) => props.flex};
`;

export const Icon = styled(({ className, children, name, ...props }) => (
  <ion-icon
    className={className}
    name={name}
    style={{ color: props.color, width: props.size || '18px', height: props.size || '18px' }}
  >
    {children}
  </ion-icon>
))``;

export const Text = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => props.fontWeight};
`;
