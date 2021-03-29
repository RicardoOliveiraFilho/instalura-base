import { css } from 'styled-components';
import { breakpoints } from '../index';

export default function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map(breakpointsName => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
        ${cssByBreakpoints[breakpointsName]}
      }
    `;
  });
}
