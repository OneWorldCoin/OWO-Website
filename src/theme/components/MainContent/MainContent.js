import styled from 'styled-components';
import { generateProps, transitions } from 'styled-gen';

const MainContent = styled.main`
    ${transitions('transform', 1000, 'outExpo')};

    display: flex;
    flex-direction: column;
    min-height: 101vh;
    padding-top: 50px;

    transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(calc(100vh + 100px))'};

    ${generateProps};
`;

export default MainContent;