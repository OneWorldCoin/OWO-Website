import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { TextLogo, Grid, Row, Col, IconLink } from '../../theme/components';

import Buyers from './Buyers';
import Navlist from './Navlist';
import Resources from './Resources';

import {
    HeaderWrapper,
    HeaderContent,
    HeaderAside,
} from './Header.style';

export default class Header extends Component {
    render() {
        return(
            <StaticQuery
                query={HEADER_QUERY}
                render={({header: { child: { navlist, resources, github, buy } }}) => (
                    <HeaderWrapper>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <HeaderContent>
                                        <TextLogo />
                                        <HeaderAside>
                                            <Navlist items={navlist} />
                                            <Resources {...resources} />
                                            <Buyers {...buy} />
                                            <IconLink
                                                color="black"
                                                ml={1}
                                                icon="github"
                                                href={github}
                                                target="_blank"
                                                rel="noopener"
                                            />
                                        </HeaderAside>
                                    </HeaderContent>
                                </Col>
                            </Row>
                        </Grid>
                    </HeaderWrapper>
                )}
            />
        );
    }
}

const HEADER_QUERY = graphql`
    query HeaderQuery {
        header: file(
            name: { eq: "nav" }
            sourceInstanceName: {eq: "common"}
        ) {
            child: childCommonJson {
                navlist {
                    name
                    label
                },
                resources {
                    label
                    categories {
                        label
                        icon
                        items {
                            label
                            icon
                            url
                        }
                    }
                }
                buy {
                    label
                    sellers {
                        name
                        url
                        logo
                    }
                }
                github
            }
        }
    }
`;