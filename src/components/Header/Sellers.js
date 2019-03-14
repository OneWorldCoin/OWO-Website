import React from 'react';
import { Popover } from '../';
import styled from 'styled-components';
import { transitions } from 'styled-gen';

import { getColor } from '../../theme/helpers/getColor';
import { colors } from '../../theme';
import { Button, IconLink } from '../../theme/components';

const SellerLinkEl = styled.a`
    ${transitions('background-color', 250, 'outCubic')};

    align-items: center;
    display: flex;
    justify-content: center;
    height: 70px;
    padding: 0 20px;
    background-color: ${colors.primary};

    img {
        max-height: 25px;
        max-width: 120px;
    }

    &:not(:last-of-type) {
        border-bottom: 1px solid ${getColor('white', { opacity: .20 })};
    }

    &:hover {
        background-color: ${getColor('primary', { darken: 0.025 })};
    }
`;

const SellerLink = ({ url, logo }) => (
    <SellerLinkEl
        href={url}
        rel="noopener"
        target="_blank"
    >
        <img src={logo} />
    </SellerLinkEl>
);

const Sellers = ({ label, sellers}) => {
    return (
        <Popover
            content={sellers.map(({ name, ...other }) => <SellerLink key={name} {...other} />)}
        >
            <React.Fragment>
                <Button
                    ml={1.5}
                    label={label}
                    noShadow
                    small
                    withCaret
                    display={{xs: 'none', sm: 'inline-flex'}}
                />
                <IconLink
                    color="primary"
                    ml={1.5}
                    icon="logo"
                    target="_blank"
                    rel="noopener"
                    display={{xs: 'inline-flex', sm: 'none'}}
                />
            </React.Fragment>
        </Popover>
    );
};

export default Sellers;
