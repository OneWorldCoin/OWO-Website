import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { TextLogo, IconLink } from '../../theme/components';

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
                            <FooterContent>
                                {social.map(({icon, url}, i) => (
                                    <IconLink
                                        key={i}
                                        ml={i > 0 && 2}
                                        icon={icon}
                                        href={url}
                                        target="_blank"
                                        rel="noopener"
                                        color="white"
                                    />
                                ))}
                            </FooterContent>
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