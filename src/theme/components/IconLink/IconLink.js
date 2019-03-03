import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { size } from 'polished';
import { variations, mq, transitions } from 'styled-gen';

import A from '../A/A';

import { Icon as DefaultIcon } from '../';

const sizeVariations = {
    default: css`
        ${size(20)};
    `,
};

const Link = styled(A).attrs({
    withoutHoverEffect: true,
})`
    ${mq.tabletLandscape(css`
        &:hover {
            svg {
                transform: scale(1.5);
            }
        }
        svg {
            ${transitions('all', 'hover', 'inOutBack')};
        }
    `)}
`;

const Icon = styled(DefaultIcon)`
    ${variations(sizeVariations)};
`;

const IconLink = ({ icon, size, ...other }) => (
    <Link {...other}>
        <Icon icon={icon} size={size} fluid/>
    </Link>
);

IconLink.propTypes = {
    icon: PropTypes.string,
};

export default IconLink;