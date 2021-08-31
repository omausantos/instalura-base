import styled from 'styled-components';
import cssInline from '../../../theme/utils/cssInline';

const Box = styled.div`
    ${cssInline}
    ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;

export { Box as default };
