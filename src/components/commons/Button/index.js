import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import cssInline from '../../../theme/utils/cssInline';
import Link from '../Link';

const ButtonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonWrapper = styled.button`
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
  })};
    ${cssInline};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: opacity ${({ theme }) => theme.transition};
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)};
    &:hover,
    &:focus {
        opacity: .5;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: .2;
    }

    ${({ fullWidth }) => fullWidth && css`
        width: 100%;
    `};
`;

export default function Button({ href, ...props }) {
  const isLink = Boolean(href);
  const componentTag = isLink ? Link : 'button';
  return (
    <ButtonWrapper
      as={componentTag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

Button.defaultProps = {
  href: undefined,
};

Button.propTypes = {
  href: PropTypes.string,
};
