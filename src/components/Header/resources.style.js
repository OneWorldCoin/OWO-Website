import styled from 'styled-components';

import { colors, fonts } from '../../theme';
import { getColor } from '../../theme/helpers/getColor';
import { A } from '../../theme/components';

const ResourcesCategoriesList = styled.ul`
    padding: 20px;
    width: 440px;
    color: ${colors.white};
    display: flex;
    flex-wrap: wrap;
`;

const ResourcesCategoriesItem = styled.li`
    padding: 20px;
    width: 50%;
`;

const ResourcesCategoriesLabel = styled.div`
    display: flex;
    align-items: flex-end;
    font-weight: ${fonts.weights.medium};
    color: ${getColor('white', {opacity: .5})};
    font-size: ${fonts.size('xs')};

    span {
        line-height: 1;
        margin-left: 1rem;
    }
`;

const ResourcesSublist = styled.ul`
    padding-left: 22px;
`;

const ResourcesSublistItem = styled.li`
    margin-top: 16px;
`;

const ResourcesLink = styled(A)`
    line-height: 1;
    display: flex;
    color: ${colors.primary};
    font-weight: ${fonts.weights.medium};
    font-size: ${fonts.size('xs')};

    span {
        margin-left: 10px;
        line-height: 1.2;
        margin-top: 3px;
    }

    svg {
        fill: ${getColor('white', {opacity: .2})};
        flex-shrink: 0;
    }
`;

export {
    ResourcesCategoriesList,
    ResourcesCategoriesItem,
    ResourcesCategoriesLabel,
    ResourcesSublist,
    ResourcesSublistItem,
    ResourcesLink,
};