import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { size } from 'polished';
import { variations } from 'styled-gen';

import A from '../A/A';

import { Icon as DefaultIcon } from '../';

const sizeVariations = {
    default: css`
        ${size(20)};
    `,
};

const Icon = styled(DefaultIcon)`
    ${variations(sizeVariations)};
`;

const IconLink = ({ icon, size, ...other }) => (
    <A {...other}>
        <Icon icon={icon} size={size} fluid/>
    </A>
);

IconLink.propTypes = {
    icon: PropTypes.string,
};

export default IconLink;