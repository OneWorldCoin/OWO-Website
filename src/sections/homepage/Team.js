import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Col, Grid, H3, Row, Section } from '../../theme/components';
import { Member } from '../../components';

const TeamWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -2.5rem;
    margin-right: -2.5rem;
`;

export const Team = ({ header, members }) => {
    return (
        <Section
            name="team"
            fromColor="lighterGrey"
        >
            <Grid>
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
                        <TeamWrapper>
                            {members.map((member, i) => (
                                <Member
                                    key={i}
                                    {...member}
                                />
                            ))}
                        </TeamWrapper>
                    </Col>
                </Row>
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