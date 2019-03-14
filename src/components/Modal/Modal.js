import React from 'react';
import styled from 'styled-components';
import { position, rgba, size } from 'polished';
import { transitions } from 'styled-gen';
import { colors } from '../../theme';
import { IconLink, Text, Img, Grid, Col, Row } from '../../theme/components';

const ModalWrapper = styled.div`
    ${position('fixed', 0, null, null, 0)};
    ${size('100vh', '100vw')};

    z-index: 999999;
`;

const ModalBackdrop = styled.div`
    ${position('absolute', 0)};
    ${props => transitions('all', props.animationDuration, 'inOutCubic')};

    opacity: ${props => props.isActive ? 1 : 0};
    background-color: ${rgba(colors.white, .98)};
`;

const ModalContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;


const ModalContent = styled.div`
    ${props => transitions('all', props.animationDuration, 'inOutCubic')};

    height: 100%;
    opacity: ${props => props.isActive ? 1 : 0};
    transform: ${props => props.isActive ? 'translateY(0)' : 'translateY(200px)'};
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    max-height: 100vh;
`;

const CloseBtn = styled(IconLink).attrs({
    icon: 'times',
    grey: true,
})`
    ${position('absolute', 50, 50, null, null)};
    ${size(18)};

    z-index: 10;
`;

const Modal = ({ isActive, onClose, ...props }) => {

    return (
        <ModalWrapper>
            <ModalBackdrop isActive={isActive}>
                <CloseBtn onClick={() => onClose()}/>
            </ModalBackdrop>
            <ModalContainer>
                <ModalContent isActive={isActive}>
                    <Grid>
                        <Row center="xs" start="xs">
                            <Col xs={12} lg={10} textAlign="left" pt={{xs: 6, md: 8.5}}>
                                <Img src={props.table} />
                                <Text as="div" mt={2} fontSm opacity={0.7}>{props.notes}</Text>
                            </Col>
                        </Row>
                    </Grid>
                </ModalContent>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default Modal;