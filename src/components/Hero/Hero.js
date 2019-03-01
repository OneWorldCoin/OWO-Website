import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';

import Hemisphere from '../Hemisphere/Hemisphere';
import Stars from '../Stars/Stars';
import MobileDevice from '../MobileDevice/MobileDevice';

import { Section, Grid, Row, Col, H2, Text, Div } from '../../theme/components';

const HeroWrapper = styled(Section).attrs({
    as: 'header',
})`
    ${size('100vh', '100vw')};

    position: relative;
    overflow: hidden;
`;

const Hero = props => {
    const { header, intro } = props;

    return (
        <HeroWrapper>
            <Stars />
            <Grid>
                <Row pt={{xs: 8, sm: 11}}>
                    <Col xs={12} sm={7}>
                        <H2
                            fontSize={{xs: 36, sm: 62}}
                            mt={{sm: 5.625}}
                        >
                            {header}
                        </H2>
                        <Text
                            as="p"
                            fontLg
                            color="white"
                            opacity={0.7}
                            maxWidth={381}
                            mt={2}
                        >
                            { intro }
                        </Text>
                    </Col>
                    <Col
                        xs={12}
                        sm={4}
                        center
                        mt={{xs: 2, sm: 0}}
                    >
                        <MobileDevice
                            darkShadow
                            img="/img/mobile-teaser.svg"
                        />
                    </Col>
                </Row>
            </Grid>
            <Div relative>
                <Hemisphere />
            </Div>
        </HeroWrapper>
    );
};

Hero.propTypes = {
    header: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
};

export default Hero;