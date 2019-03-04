import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { Button as Btn, Icon } from '../../theme/components';
import { fonts, colors } from '../../theme';
import { mq } from 'styled-gen';

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;
    background-color: ${colors.white};
    height: 48px;
`;

const Input = styled.input.attrs({
    type: 'email',
})`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border: 0;
    outline: 0;
    background-color: transparent;
    font-family: ${fonts.families.sans};
    font-size: ${fonts.size('base')};
    color: ${colors.black};
    padding: 0 16px 0 32px;

    &::-webkit-input-placeholder {
        color: ${rgba(colors.black, .45)};
    }
`;

const Button = styled(Btn)`
    ${mq.phone(css`
        padding: 0;
        width: 48px;
        flex-shrink: 0;
        justify-content: center;
    `)}
`;

const BtnLabel = styled.span`
    ${mq.phone(css`
        display: none;
    `)}
`;
const BtnIcon = styled.span`
    display: none;

    ${mq.phone(css`
        display: block;
    `)}
`;

export default class Subscribe extends Component {

    subscribe = () => {
        /* eslint-disable-next-line */
        console.log('subscribing');
    }

    render() {
        const { label, placeholder } = this.props;
        return (
            <InputWrapper>
                <Input placeholder={placeholder} />
                <Button
                    large
                    onClick={this.subscribe}
                >
                    <BtnLabel>
                        {label}
                    </BtnLabel>
                    <BtnIcon>
                        <Icon icon="arrowRight"/>
                    </BtnIcon>
                </Button>
            </InputWrapper>
        );
    }
}
