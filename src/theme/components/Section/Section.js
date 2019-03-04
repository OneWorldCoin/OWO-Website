import React from 'react';
import styled from 'styled-components';
import { generateProps } from 'styled-gen';
import { Element } from 'react-scroll';
import { getColor } from '../../helpers/getColor';

const SectionEl = styled(Element)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${props => getColor(props.fromColor ? props.fromColor : 'white')};
`;

const SectionContent = styled.div`
    width: 100%;

    ${generateProps};
`;

SectionContent.defaultProps = {
    bgColor: 'white',
    pb: {xs: 4.5, md: 9},
    pt: {xs: 4.5, md: 9},
};

const SvgEl = styled.svg`
    width: 100%;

    ${generateProps};
`;

const RoundSvg = (props) => (
    <SvgEl {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 50">
        <path d="M0 49.2v.8h1280v-1C1113.5 18.7 888.3 0 640.4 0 392.1 0 166.6 18.7 0 49.2z"/>
    </SvgEl>
);

const Section = ({ children, noCurve, fromColor, asEl, ...other }) => (
    <SectionEl fromColor={fromColor} as={asEl || 'section'}>
        {!noCurve && (
            <RoundSvg fillColor={other.bgColor || 'white'} />
        )}
        <SectionContent {...other}>
            {children}
        </SectionContent>
    </SectionEl>
);

export default Section;