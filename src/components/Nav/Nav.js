import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { position, size, rgba } from 'polished';
import { transitions, mq } from 'styled-gen';

import { Grid, Row, Col, Logo, Icon, Div } from '../../theme/components';

const NavWrapper = styled.nav`
    ${position('fixed', 0, 0, null, 0)};

    padding-top: 100px;
    z-index: 999;

    ${mq.phone(css`
        padding-top: 2rem;
    `)};
`;

const NavContent = styled(Div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SocialLink = styled.a`
    ${size('2rem')};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${props => rgba(props.theme.colors.white, 1)};

    ${mq.tabletLandscape(css`
        &:hover {
            svg {
                transform: scale(1.5);
            }
        }

        svg {
            ${transitions('all', 'hover', 'inOutBack')};
        }
    `)}
`;

const Nav = () => (
    <StaticQuery
        query={graphql`
            query NavQuery {
                nav: file(
                    name: { eq: "nav" }
                    sourceInstanceName: {eq: "common"}
                ) {
                    child: childCommonJson {
                        social {
                            discord
                        }
                    }
                }
            }
        `}
        render={({ nav: { child: { social }} }) => {
            return (
                <NavWrapper>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <NavContent>
                                    <Logo white />
                                    <SocialLink
                                        href={social.discord}
                                        target="_blank"
                                    >
                                        <Icon icon="discord" size={1.25} />
                                    </SocialLink>
                                </NavContent>
                            </Col>
                        </Row>
                    </Grid>
                </NavWrapper>
            );
        }}
    />
);

export default Nav;