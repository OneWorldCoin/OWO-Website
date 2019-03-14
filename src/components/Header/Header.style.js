import styled from 'styled-components';
import { rgba, size } from 'polished';
import { colors } from '../../theme';
import { Div } from '../../theme/components';

const HeaderWrapper = styled.nav`
    background-color: ${colors.white};
    box-shadow: 0 0 20px ${rgba(colors.black, .1)};
    display: block;
    position: fixed;
    width: 100%;
    z-index: 99;
`;

const HeaderContent = styled.div`
    ${size(50, '100%')};

    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const HeaderAside = styled(Div)`
    display: flex;
    align-items: center;
`;

export {
    HeaderWrapper,
    HeaderContent,
    HeaderAside,
};
