import styled, { css } from "styled-components";
import get from "lodash/get";
import PropTypes from 'prop-types';
import { propToStyle } from "../../../theme/utils/propToStyle";


const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('textAlign')}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

/*
const TextBase = styled.span`
    font-size: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontSize`)};
    font-weight: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.fontWeight`)};
    line-height: ${({ theme, variant }) => get(theme, `typographyVariants.${variant}.lineHeight`)};;
`;
*/

export default function Text({tag, variant, children, ...props}){
    return (        
        <TextBase 
            as={tag}
            variant={variant}
            {...props}
        >
            {children}
        </TextBase>
    )
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}

Text.propTypes = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['title', 'paragraph1', 'smallestException']),
    children: PropTypes.node.isRequired,
}