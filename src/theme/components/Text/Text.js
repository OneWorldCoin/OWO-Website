import styled, { css } from 'styled-components';
import { generateProps, variations } from 'styled-gen';

const formatVariations = {
    default: css`
        line-height: 1.5;
    `,

};

const Text = styled.span`
    ${variations(formatVariations)};
    ${generateProps};
`;

export default Text;