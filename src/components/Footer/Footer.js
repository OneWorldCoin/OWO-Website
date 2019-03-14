import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { TextLogo, IconLink } from '../../theme/components';
import { Animated } from '..';

import {
    FooterWrapper,
    FooterContent,
} from './Footer.style';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <StaticQuery
                    query={FOOTER_QUERY}
                    render={({footer: { child: { social }}}) => (
                        <>
                            <TextLogo />
                            <Animated comp={FooterContent}>
                                {social.map(({icon, url}, i) => (
                                    <div key={i}>
                                        <IconLink
                                            ml={i > 0 ? 2 : 0}
                                            icon={icon}
                                            href={url}
                                            target="_blank"
                                            rel="noopener"
                                            color="white"
                                        />
                                    </div>
                                ))}
                            </Animated>
                        </>
                    )}
                />
            </FooterWrapper>
        );
    }
}


const FOOTER_QUERY = graphql`
    query FooterQuery {
        footer: file(
            name: { eq: "nav" }
            sourceInstanceName: {eq: "common"}
        ) {
            child: childCommonJson {
                social {
                    icon
                    url
                }
            }
        }
    }
`;