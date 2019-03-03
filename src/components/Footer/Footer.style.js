import styled, { css } from 'styled-components';
import { Section } from '../../theme/components';
import { mq } from 'styled-gen';


const FooterWrapper = styled(Section).attrs({
    bgColor: 'black',
    fromColor: 'lighterGrey',
    asEl: 'footer',
})`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    flex-direction: column;
`;

const FooterContent = styled.div`
    margin-top: 65px;
    padding-top: 95px;
    padding-bottom: 340px;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url("/img/logo-cut.svg");
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;

    ${mq.phone(css`
        padding-bottom: 170px;
        background-size: auto 100%;
    `)};
`;

export {
    FooterWrapper,
    FooterContent,
};