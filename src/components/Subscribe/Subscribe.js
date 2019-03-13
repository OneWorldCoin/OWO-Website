import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { StaticQuery, graphql } from 'gatsby';
import axios from 'axios';

import { Button as Btn, Icon, Text } from '../../theme/components';
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

    state = {
        subscribeUrl: null,
        isLoading: false,
        email: null,
        isValid: false,
        subscribed: false,
        message: null,
        error: null,
    }

    subscribe = url => {
        url && this.state.isValid && this.setState({loading: true}, () => {
            axios.post(url, {email: this.state.email})
                .then(result => this.setState({
                    subscribed: result.status === 200,
                    isLoading: false,
                    message: this.props.thankyouMessage,
                }))
                .catch(error => this.setState({
                    error,
                    isLoading: false,
                    message: this.props.errorMessage,
                }));
        });
    }

    updateEmail = e => {
        const email = e.target.value;
        /* eslint-disable-next-line */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.setState({ email, isValid: re.test(email.toLowerCase()) });
    };

    render() {
        const { label, placeholder } = this.props;
        return (
            <StaticQuery
                query={graphql`
                    query subscribeQuery {
                        site {
                            siteMetadata {
                                subscribeUrl
                            }
                        }
                    }
                `}
                render={data => {
                    const { subscribeUrl } = data.site.siteMetadata;

                    return !this.state.subscribed || !this.state.error ?
                        (
                            <React.Fragment>
                                <InputWrapper>
                                    <Input placeholder={placeholder} onChange={this.updateEmail}/>
                                    <Button
                                        large
                                        onClick={() => this.subscribe(subscribeUrl)}
                                        disabled={!this.state.isValid && this.state.email}
                                        loading={this.state.loading}
                                    >
                                        <BtnLabel>
                                            {label}
                                        </BtnLabel>
                                        <BtnIcon>
                                            <Icon icon="arrowRight"/>
                                        </BtnIcon>
                                    </Button>
                                </InputWrapper>
                                <Text
                                    as="p"
                                    left
                                    fontXxs
                                    fontMedium
                                    padding="null 1"
                                    greyDark
                                    mt={1.15}
                                >
                                    {this.props.optIn.label}
                                </Text>
                            </React.Fragment>
                        ) : (
                            <Text
                                as="p"
                                center
                                fontLg
                                primary
                                fontMedium
                            >
                                {this.state.message}
                            </Text>
                        )
                    ;
                }}
            />
        );
    }
}
