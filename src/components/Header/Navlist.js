import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import styled, { css } from 'styled-components';
import { fonts, colors } from '../../theme';
import { mq } from 'styled-gen';

const NavlistLinkContent = styled(ScrollLink)`
    font-weight: ${fonts.weights.medium};
    font-size: ${fonts.size('sm')};
    color: ${colors.black};
    display: none;

    ${mq.tabletLandscape(css`
        display: block;
    `)};

    &.active {
        color: ${colors.primary};
    }

    & + & {
        margin-left: 30px;
    }
`;

const NavlistLink = ({name, label}) => (
    <NavlistLinkContent
        to={name}
        spy
        smooth
        duration={500}
        offset={-100}
        activeClass="active"
    >
        {label}
    </NavlistLinkContent>
);

const Navlist = ({ items }) => items.map((item, i) => <NavlistLink key={i} {...item} />);

Navlist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
        })
    ),
};

export default Navlist;
