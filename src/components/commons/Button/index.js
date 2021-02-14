import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

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
    ${TextStyleVariantsMap.smallestException}
    ${({ ghost }) => ghost ? buttonGhost : buttonDefault}
    transition: opacity ${({ theme }) => theme.transition};
    &:hover,
    &:focus {
        opacity: .5;
    }
    ${breakpointsMedia({
        xs: css`
            ${TextStyleVariantsMap.smallestException}
        `,
        md: css`
            ${TextStyleVariantsMap.paragraph1}
        `,
    })}
`;
