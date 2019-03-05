import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { size, rgba } from 'polished';
import { transitions, mq } from 'styled-gen';

import Stars from '../Stars/Stars';
import MobileDevice from '../MobileDevice/MobileDevice';

import { Grid, Logo, Row, Col, H2, Text, Div, IconLink } from '../../theme/components';
import { colors } from '../../theme';

const HeroWrapper = styled(Div).attrs({
    as: 'header',
})`
    ${size('100vh', '100vw')};
    ${transitions('transform', 750, 'inOutCirc')};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    overflow: hidden;
    top: 0;
    z-index: 999;

    transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(-100vh)'};
`;

const Round = styled.div`
    position: absolute;
    height: 100vh;
    width: 350vh;
    background-color: ${colors.black};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 5%;
    top: 85%;
    box-shadow: 0 0 70px ${rgba('black', .4)};

    svg {
        color: ${rgba(colors.white, .2)};
        height: 50px;
        width: auto;
    }

    ${mq.from('tablet', css`
        padding-top: 10%;
        top: 65%;
    `)};

    ${mq.from('desktop', css`
        top: 60%;
    `)};
`;

const Hero = props => {
    const { header, isActive, intro, onDismiss } = props;

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
                            fontSize={{xs: 36, sm: 58, md: 62}}
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
            <Round>
                <IconLink icon="mouse" onClick={() => onDismiss()}/>
            </Round>
        </HeroWrapper>
    );
};

Hero.propTypes = {
    header: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
};

export default Hero;