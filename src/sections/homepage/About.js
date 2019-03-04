import React from 'react';
import PropTypes from 'prop-types';

import { Button, Col, Grid, H3, Img, Row, Section, Text } from '../../theme/components';

export const About = ({ button, header, img, text }) => {

    return (
        <Section
            name={'about'}
            noCurve
            mt={{xs: 2.25, md: 4.5}}
        >
            <Grid>
                <Row>
                    <Col xs={12} md={5}>

                        {/* header */}
                        <H3
                            withLine
                            mb={{xs: 2, md: 4}}
                        >{header}
                        </H3>

                        {/* text */}
                        {text.map((p, i) => (
                            <Text
                                as="p"
                                key={i}
                                body
                                fontSize={{xs: 16, md: 18}}
                            >{p}</Text>
                        ))}

                        {/* whitepaper button */}
                        <Button
                            rel="noopener"
                            target="_blank"
                            href={button.url}
                            label={button.label}
                            icon={button.icon}
                            iconHighlight
                            mt={{xs: 3, md: 4}}
                        />
                    </Col>
                    <Col xs={12} md={7} mt={{xs: 3, md: 0}}>
                        <Img {...img} />
                    </Col>
                </Row>
            </Grid>
        </Section>
    );
};

About.propTypes = {
    button: PropTypes.shape({
        icon: PropTypes.string,
        label: PropTypes.string,
        url: PropTypes.string,
    }),
    header: PropTypes.string,
    img: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string,
    }),
    text: PropTypes.arrayOf(PropTypes.string),

};
