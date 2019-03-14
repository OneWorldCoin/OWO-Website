import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, position, rgba } from 'polished';

import { colors } from '../../theme';
import { Text, IconLink } from '../../theme/components';

const MemberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0 2.5rem 5rem 2.5rem;
    position: relative;
`;

const MemberPhoto = styled.div`
    ${size(256)};

    border-radius: 50%;
    background-image: url("${props => props.photo}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 2rem;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        ${position('absolute', 0)};
        background-color: ${rgba(colors.primary, .18)};
    }
`;

const MemberSocialWrapper = styled.div`
    ${position('absolute', null, 0, 0, null)};
`;

const MemberLine = styled.div`
    background-color: ${rgba(colors.grey, .5)};
    height: 1px;
    width: 2rem;
    display: block;
    margin: .5rem auto;
`;

const Link = styled(IconLink).attrs({
    color: 'grey',
    small: true,
})`
    & + & {
        margin-left: 14px;
    }

    svg {
        ${size(14)};
    }
`;


const Member = ({ name, photo, position, social }) => {
    return (
        <MemberWrapper>
            <Text
                as="div"
                fontXl
            >
                {name}
            </Text>
            <MemberLine />
            <Text
                as="div"
                note
            >
                {position}
            </Text>
            <MemberPhoto photo={photo} />
            <MemberSocialWrapper>
                {social.twitter && <Link icon="twitter" href={social.twitter} rel="noopener" target="_blank" />}
                {social.linkedin && <Link icon="linkedin" href={social.linkedin} rel="noopener" target="_blank" />}
            </MemberSocialWrapper>
        </MemberWrapper>
    );
};

Member.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    position: PropTypes.string,
    social: PropTypes.shape({
        linkedin: PropTypes.string,
        twitter: PropTypes.string,
    }),
};

export default Member;
