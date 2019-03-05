import React from 'react';
import PropTypes from 'prop-types';

import { Subscribe, Animated } from '../../components';

import { Col, Grid, H3, Row, Section, Text } from '../../theme/components';

export const Cta = ({ header, input, text, thankyouMessage }) => {
    return (
        <Section
            bgColor="lighterGrey"
        >
            <Animated comp={Grid}>
                <Row center="xs">
                    <Col xs={12} md={4}>
                        {/* header */}
                        <H3
                            withLine
                            center
                            lightGrey
                            mb={{xs: 2}}
                        >
                            {header}
                        </H3>
                        <Text body as="p" center>
                            {text}
                        </Text>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col xs={12} md={5} mt={{xs: 2, sm: 3}}>
                        <Subscribe {...input} thankyouMessage={thankyouMessage} />
                    </Col>
                </Row>
            </Animated>
        </Section>
    );
};

Cta.propTypes = {
    header: PropTypes.string,
    input: PropTypes.shape({
        placeholder: PropTypes.string,
        label: PropTypes.string,
    }),
    thankyouMessage: PropTypes.string,
};
