import styled from 'styled-components';
import { generateProps, transitions } from 'styled-gen';

const MainContent = styled.main`
    ${transitions('transform', 1000, 'outExpo')};

    display: flex;
    flex-direction: column;
    min-height: 100vh;

    ${generateProps};
`;

export default MainContent;