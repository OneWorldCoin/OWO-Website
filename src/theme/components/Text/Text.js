import styled, { css } from 'styled-components';
import { generateProps, variations } from 'styled-gen';
import { rgba } from 'polished';

import { colors } from '../..';

const formatVariations = {
    default: css`
        line-height: 1.5;
    `,
    body: css`
        color: ${rgba(colors.black, .7)};
    `,
};

const Text = styled.span`
    flex-wrap: wrap;

    ${props => props.as === 'p' && css`

        & + & {
            margin-top: 1em;
        }
    `}

    ${variations(formatVariations)};
    ${generateProps};
`;

export default Text;