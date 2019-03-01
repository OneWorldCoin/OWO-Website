import React from 'react';
import styled, { css } from 'styled-components';
import { mq } from 'styled-gen';
import { position } from 'polished';

const HemisphereWrapper = styled.div`
    display: none;
    z-index: 9;

    ${mq.tablet(css`
        ${position('absolute', '-14rem', 0, 0, 0)};

        display: block;
    `)};

    ${mq.desktop(css`
        ${position('absolute', '-16rem', 0, 0, 0)};
    `)};
`;

const HemisphereBlackExcedent = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.deepBlack};
    position: relative;
    margin-top: -10px;
`;

const SvgEl = styled.svg`
    fill: ${props => props.theme.colors.black};
`;

const Hemisphere = props => (
    <HemisphereWrapper>
        <SvgEl
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 330"
            filter="url(#shdw)"
            {...props}
        >
            <defs>
                <filter id="shdw" x="0" y="0" width="200%" height="200%">
                    <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0"/>
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="20" />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.35"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <path d="M1440 330H0V177.2c187.4-36 441.2-58.2 720.5-58.2 278.9 0 532.2 22.1 719.5 58v153z" />
        </SvgEl>
        <HemisphereBlackExcedent />
    </HemisphereWrapper>
);

export default Hemisphere;
