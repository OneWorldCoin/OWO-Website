import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { mq } from 'styled-gen';

import { Col, Grid, H3, Row, Section } from '../../theme/components';
import { Member, Animated } from '../../components';

const TeamWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ${mq.tabletLandscape(css`
        margin-left: -2.5rem;
        margin-right: -2.5rem;
    `)}
`;

export const Team = ({ header, members }) => {
    return (
        <Section
            name="team"
            fromColor="lighterGrey"
        >
            <Grid>
                <Animated>
                    <Row center="xs">
                        <Col xs={12} md={10}>

                            {/* header */}
                            <H3
                                withLine
                                center
                                mb={{xs: 4.5, md: 9}}
                            >
                                {header}
                            </H3>
                            <Animated comp={TeamWrapper}>
                                {members.map((member, i) => (
                                    <div key={i}>
                                        <Member {...member}/>
                                    </div>
                                ))}
                            </Animated>
                        </Col>
                    </Row>
                </Animated>
            </Grid>
        </Section>
    );
};

Team.propTypes = {
    header: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        photo: PropTypes.string,
        position: PropTypes.string,
        social: PropTypes.shape({
            linkedin: PropTypes.string,
            twitter: PropTypes.string,
        }),
    })),
};