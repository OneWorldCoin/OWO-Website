import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { mq, transitions } from 'styled-gen';

import { Col, Grid, H3, Row, Section } from '../../theme/components';

const LogoLink = styled.a`

    img {
        height: auto;
        max-height: 65px;
        max-width: 256px;
        opacity: .3;
        width: auto;
    }

    ${mq.tabletLandscape(css`
        &:hover {
            img {
                opacity: 0.5;
                transform: scale(1.5);
            }
        }
        img {
            ${transitions('all', 'hover', 'inOutBack')};
        }
    `)}
`;

export const Partners = ({ header, items }) => {
    return (
        <Section
            name="partners"
            fromColor="black"
        >
            <Grid>
                <Row>
                    <Col xs={12}>
                        {/* header */}
                        <H3
                            withLine
                            center
                            mb={{xs: 4}}
                        >
                            {header}
                        </H3>
                    </Col>
                </Row>
                <Row center="xs" middle="xs">
                    {items.map(({ logo, name, url }, i) => (
                        <Col xs={12} md={4} key={i} mb={6}>
                            <LogoLink
                                href={url}
                                rel="noopener"
                                target="_blank"
                            >
                                <img
                                    alt={name}
                                    src={logo}
                                />
                            </LogoLink>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </Section>
    );
};

Partners.propTypes = {
    header: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        logo: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
    })),
};