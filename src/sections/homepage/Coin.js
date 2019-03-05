import React from 'react';
import PropTypes from 'prop-types';

import { Button, Col, Grid, H3, Img, Row, Section, Text } from '../../theme/components';
import { Animated } from '../../components';

export const Coin = ({ button, header, img, specs}) => {
    return (
        <Section
            name="coin"
            bgColor="black"
        >
            <Grid>
                <Animated>
                    <Row>
                        <Col xs={12} md={6}>
                            {/* header */}
                            <H3
                                withLine
                                white
                                mb={{xs: 2, md: 4}}
                            >
                                {header}
                            </H3>

                            <Animated comp={Row} animation={{from: 'left'}}>
                                {specs.map(({ label, text }, i) => (
                                    <Col xs={6} key={i} mb={2.5}>
                                        <Text
                                            note
                                            white
                                            opacity={.5}
                                        >
                                            {label}
                                        </Text>
                                        <Text
                                            as="div"
                                            mt={.3}
                                            fontMedium
                                            fontSize={{xs: 'sm', md: 'xl'}}
                                            white
                                        >
                                            {text}
                                        </Text>
                                    </Col>
                                ))}
                                <Col xs={12} sm={3} mb={2.5}>
                                    <Button
                                        mt={1}
                                        label={button.label}
                                        fluid
                                        overBlack
                                    />
                                </Col>
                            </Animated>
                        </Col>
                            <Col xs={12} md={6}>
                                <Animated animation={{from: 'right'}}>
                                    <div>
                                        <Img {...img} />
                                    </div>
                                </Animated>
                            </Col>
                    </Row>
                </Animated>
            </Grid>
        </Section>
    );
};

Coin.propTypes = {
    button: PropTypes.shape({
        label: PropTypes.string,
    }),
    header: PropTypes.string,
    img: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string,
    }),
    specs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        text: PropTypes.string,
    })),
};
