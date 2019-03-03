import styled from 'styled-components';
import { generateProps } from 'styled-gen';
import { Element } from 'react-scroll';

const Section = styled(Element)`
    ${generateProps};
`;

Section.defaultProps = {
    as: 'section',
};

export default Section;