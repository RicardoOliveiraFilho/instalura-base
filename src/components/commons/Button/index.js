import styled, { css } from 'styled-components';
import get from 'lodash/get';

const buttonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
`;

const buttonDefault = css`
    color: ${({ theme, variant  }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ ghost }) => ghost ? buttonGhost : buttonDefault}
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;
