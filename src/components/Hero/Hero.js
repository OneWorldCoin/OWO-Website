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

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    position: absolute;
    top: 0;
    transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(-100vh)'};
    z-index: 999;

`;

const RoundWrapper = styled.div`
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 100vh;
    width: 100%;

    ${mq.tablet(css`
        position: relative;
        top: initial;
    `)};
`;

const Round = styled.div`
    align-items: flex-start;
    box-shadow: 0 0 70px ${rgba('black', .4)};
    background-color: ${colors.black};
    border-radius: 50%;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding-top: 5%;
    position: absolute;
    width: 350vh;
    top: -80px;

    svg {
        color: ${rgba(colors.white, .2)};
        height: 50px;
        width: auto;
    }

    ${mq.from('tablet', css`
        padding-top: 30px;
        top: -120px;
    `)};


    ${mq.from('desktop', css`
        padding-top: 50px;
        top: -120px;
    `)};


`;

const Hero = props => {
    const { header, isActive, intro, onDismiss } = props;

    return (
        <HeroWrapper isActive={isActive}>
            <Stars />
            <Grid>
                <Row pt={{xs: 2.5, sm: 7.5}}>
                    <Col
                        xs={12}
                        textAlign={{xs: 'center', sm: 'initial'}}
                    >
                        <Div
                            margin={{xs: '0 auto null', sm: 'null initial null'}}
                            maxWidth={{xs: 180, sm: 'initial'}}
                            textAlign="left"
                        >
                            <Logo white />
                        </Div>
                    </Col>
                </Row>
                <Row pt={{xs: 1}}>
                    <Col
                        xs={3.5}
                        sm={7}
                    >
                        <H2
                            fontSize={{xs: 26, sm: 58, md: 62}}
                            maxWidth={{xs: 180, sm: 'initial'}}
                            margin={{xs: '0 auto null', sm: '5.625 initial null'}}
                        >
                            {header}
                        </H2>
                        <Text
                            as="p"
                            fontSize={{xs: 14, sm: 'lg'}}
                            color="white"
                            opacity={0.7}
                            maxWidth={{xs: 180, sm: 381}}
                            margin={{xs: '1.5 auto null', sm: '2 null null 0'}}
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
                <RoundWrapper>
                    <Round>
                        <IconLink icon="mouse" onClick={() => onDismiss()}/>
                    </Round>
                </RoundWrapper>
            </Grid>
        </HeroWrapper>
    );
};

Hero.propTypes = {
    header: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
};

export default Hero;