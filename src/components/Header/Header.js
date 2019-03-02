import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { TextLogo, Grid, Row, Col } from '../../theme/components';

import {
    HeaderWrapper,
    HeaderContent,
} from './Header.style';

export default class Header extends Component {
    render() {
        return(
            <StaticQuery
                query={HEADER_QUERY}
                render={({header: { child: { navlist, resources, buy } }}) => (
                    <HeaderWrapper>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <HeaderContent>
                                        {console.log(navlist, resources, buy)}
                                        <TextLogo />
                                        <header>woot!</header>
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
            }
        }
    }
`;