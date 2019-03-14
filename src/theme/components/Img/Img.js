import styled from 'styled-components';
import { generateProps } from 'styled-gen';

const Img = styled.img`
    display: flex;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;

    ${generateProps};
`;

export default Img;