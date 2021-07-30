import styled, { css } from "styled-components";
import get from "lodash/get";
import { TextStyleVariants } from "../../foundation/Text";
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from "../../../theme/utils/propToStyle";


const ButtonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;   
    ${breakpointsMedia({
        xs: css`
        ${TextStyleVariants.smallestException}
        `,
        md: css`
        padding: 12px 43px;
        ${TextStyleVariants.paragraph1}
        `,
    })}
    ${propToStyle('margin')}
    ${propToStyle('display')}
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: opacity ${({ theme }) => theme.transition};
    ${({ghost}) => (ghost ? ButtonGhost : ButtonDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;