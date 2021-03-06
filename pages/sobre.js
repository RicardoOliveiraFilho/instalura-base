import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary.main.color};
`;

export default function PageSobre() {
  return <Title>Página Sobre</Title>;
}
