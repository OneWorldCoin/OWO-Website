import React from 'react';
import PropType from 'prop-types';

import styled from 'styled-components';
import { generateProps } from 'styled-gen';

// import icon libs
import ui from './icons/ui';

const iconsCollections = {
    // declare icon libs
    ui,
};

const defaultFamily = 'ui';

const renderPaths = icon =>
    icon.paths.map((path, index) => (
        <path key={`path-${index}`} d={path} />
    ));

const IconSvg = styled.svg`
    fill: currentColor;
    vertical-align: middle;
    width: ${({ fluid, size }) => fluid ? '100%' : !size ? '1rem' : null};
    height: ${({ fluid, size }) => fluid ? '100%' : !size ? '1rem' : null};

    ${generateProps};
`;

const Icon = ({ family, icon, ...props }) => {

    const selectedFamily = family && iconsCollections[family] ? family : defaultFamily;
    const selectedIcon = iconsCollections[selectedFamily][icon];

    if (!selectedIcon) {
        /* eslint-disable-next-line */
        return console.log(`There are no icon ${icon} in the ${selectedFamily}`);
    }

    if (!selectedIcon.viewbox) {
        /* eslint-disable-next-line */
        return console.log(`Icon ${icon} must have viewbox`);
    }

    return(
        <IconSvg
            viewBox={selectedIcon.viewbox}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            {...props}
        >
            {renderPaths(selectedIcon)}
        </IconSvg>
    );
};

Icon.propTypes = {
    family: PropType.string,
    icon: PropType.string,
};

export default Icon;
