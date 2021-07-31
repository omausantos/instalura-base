import { css } from 'styled-components';
import theme from '../index';

export default function breakpointsMedia(cssByBreakpoint) {
  const { breakpoints } = theme;
  const breakpointNames = Object.keys(theme.breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => css`
    @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}
