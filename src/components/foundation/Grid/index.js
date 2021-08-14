import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import cssInline from '../../../theme/utils/cssInline';

const Container = styled.div`
    padding-left: 28px;
    padding-right: 28px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    ${breakpointsMedia({
    sm: css`
            max-width: 576px; 
        `,
    md: css`
            max-width: 768px;
            padding-right: 16px;
            padding-left: 16px; 
        `,
    lg: css`
            max-width: 1160px; 
        `,
    xl: css`
            max-width: 1222px;
        `,
  })};
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
    ${cssInline}
`;

const Col = styled.div`
    padding-right: 16px;
    padding-left: 16px;    
    max-width: 100%;
    flex-basis: 0;
    flex-grow: 1;
    ${({ col }) => {
    if (typeof col === 'number') {
      return css`
                flex-grow: 0;
                flex-shrink: 0;
                flex: 0 0 ${(100 * col) / 12}%;
                max-width: ${(100 * col) / 12}%;
            `;
    }

    const breakPoints = Object.keys(col);
    return breakPoints.map((breakPoint) => breakpointsMedia({
      [breakPoint]: css`
                    flex-grow: 0;
                    flex-shrink: 0;
                    flex: 0 0 ${(100 * col[breakPoint]) / 12}%;
                    max-width: ${(100 * col[breakPoint]) / 12}%;
                `,
    }));
  }};
    
    ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
                margin-left: ${(100 * offset) / 12}%;
            `;
    }

    const breakPoints = Object.keys(offset);
    return breakPoints.map((breakPoint) => breakpointsMedia({
      [breakPoint]: css`
                    margin-left: ${(100 * offset[breakPoint]) / 12}%;
                `,
    }));
  }};

    ${cssInline}
`;

const Grid = {
  Container,
  Row,
  Col,
};

Col.defaultProps = {
  col: {},
  offset: {},
};

export { Grid as default };
