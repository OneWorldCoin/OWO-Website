import styled, { css } from 'styled-components';
import { Grid as flexGrid, Row as flexRow, Col as flexCol } from 'react-styled-flexboxgrid';
import { generateProps, mq } from 'styled-gen';

const Grid = styled(flexGrid)`
    max-width: 100%;
    position: relative;

    ${generateProps};

    ${mq.upTo('desktop', css`
        padding-left: 2rem;
        padding-right: 2rem;
    `)}

    ${mq.phone(css`
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    `)}
`;

const Row = styled(flexRow)`
    ${generateProps};
`;

const Col = styled(flexCol)`
    ${generateProps};
`;

export {
    Grid,
    Row,
    Col,
};