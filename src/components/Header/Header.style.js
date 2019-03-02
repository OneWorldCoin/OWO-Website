import styled from 'styled-components';
import { rgba, size } from 'polished';
import { colors } from '../../theme';

const HeaderWrapper = styled.header`
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

export {
    HeaderWrapper,
    HeaderContent,
};
