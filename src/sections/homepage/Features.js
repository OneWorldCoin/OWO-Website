import React from 'react';
import PropTypes from 'prop-types';

import { Col, Div, Grid, Img, Row, Section, Text } from '../../theme/components';
import { Animated } from '../../components';

export const Features = ({ features }) => {
    return (
        <Section
            name={'about'}
            bgColor='lighterGrey'
            pt={6}
        >
            <Grid>
                <Animated comp={Row} around="xs">
                    {features.map(({icon, text, title }, i) => (
                        <Col xs={10} md={3} key={i} mt={{xs: 4, md: 0}}>
                            <Div center>
                                <Img
                                    src={icon}
                                    display="inline-block"
                                    size="90px auto"
                                />
                                <Text
                                    as="div"
                                    mt={{xs: 1.5, sm: 2.5}}
                                    fontXl
                                    >
                                    {title}
                                </Text>
                                <Text
                                    as="p"
                                    mt={{xs: 1, sm: 1.5}}
                                    body
                                >
                                    {text}
                                </Text>
                            </Div>
                        </Col>
                    ))}
                </Animated>
            </Grid>
        </Section>
    );
};

Features.propTypes = {
    features: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
    })),
};