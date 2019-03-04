import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'polished';
import { transitions } from 'styled-gen';

import Hemisphere from '../Hemisphere/Hemisphere';
import Stars from '../Stars/Stars';
import MobileDevice from '../MobileDevice/MobileDevice';

import { Grid, Logo, Row, Col, H2, Text, Div } from '../../theme/components';

const HeroWrapper = styled(Div).attrs({
    as: 'header',
})`
    ${size('100vh', '100vw')};
    ${transitions('transform', 750, 'inOutCirc')};

    position: absolute;
    top: 0;
    overflow: hidden;
    z-index: 999;

    transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(-100vh)'};
`;

const Hero = props => {
    const { header, isActive, intro } = props;

    return (
        <HeroWrapper isActive={isActive}>
            <Stars />
            <Grid>
                <Row pt={{xs: 3.5, sm: 7.5}}>
                    <Col xs={12}>
                        <Logo white />
                    </Col>
                </Row>
                <Row pt={{xs: 1}}>
                    <Col xs={3.5} sm={7}>
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