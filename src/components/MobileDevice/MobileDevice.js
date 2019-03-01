import React from 'react';
import styled, { css } from 'styled-components';
import { size, rgba } from 'polished';
import { generateProps } from 'styled-gen';

const MobileDeviceWrapper = styled.div`
    ${size(584, 270)};

    display: inline-block;

    ${props => !props.noShadow
        ? props.darkShadow
            ? css`
                box-shadow: 0 0 30px ${rgba('#000', .6)};
            `
            : css`
                box-shadow: 0 0 30px ${rgba(props.theme.colors.black, .1)};
            `
        : undefined
    };

    background-color: ${props => props.theme.colors.black};
    border-radius: 35px;
    padding: 8px;
    overflow: hidden;

    ${generateProps};
`;

const MobileDeviceContent = styled.div`
    background-color: ${props => props.theme.colors.black};
    border-radius: 30px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 30px;
    width: calc(100% + 30px);
`;

const MobileDeviceImg = styled.img`
    display: block;
    height: auto;
    width: 100%;
`;

const MobileDevice = ({img, ...props}) => (
    <MobileDeviceWrapper {...props}>
        <MobileDeviceContent>
            {!!img && (
                <MobileDeviceImg
                    src={img}
                />
            )}
            {props.children}
        </MobileDeviceContent>
    </MobileDeviceWrapper>
);

export default MobileDevice;