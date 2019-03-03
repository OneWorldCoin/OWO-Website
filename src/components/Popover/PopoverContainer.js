import React from 'react';
import styled, { css } from 'styled-components';
import { position, rgba, size } from 'polished';
import { transitions } from 'styled-gen';
import { colors } from '../../theme';

const PopoverContainerWrapper = styled.div`
    ${props => transitions('all', props.animationDuration, 'outCirc')};
    ${position('absolute')};

    align-self: flex-end;
    border-radius: 12px;
    background-color: ${props => props.alternative ? colors.black : colors.primary};
    box-shadow: 0 0 20px ${rgba(colors.black, .16)};
    margin-top: 4px;
    opacity: 0;
    top: 100%;
    transform: translateY(20px);
    visibility: hidden;

    ${props => props.isActive && css`
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    `}

    &::before {
        ${size(18)}

        background-color: ${props => props.alternative ? colors.black : colors.primary};
        content: '';
        position: absolute;
        right: 8px;
        top: -1px;
        transform: rotate(45deg);
        z-index: -1;
    }
`;

const PopoverContent = styled.div`
    border-radius: 12px;
    overflow: hidden;
`;

const PopoverContainer = ({ children, ...props }) => {
    return (
        <PopoverContainerWrapper {...props}>
            <PopoverContent>
                {children}
            </PopoverContent>
        </PopoverContainerWrapper>
    );
};

export default PopoverContainer;
