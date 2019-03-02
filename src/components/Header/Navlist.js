import React from 'react';
import PropTypes from 'prop-types';

const Navlist = props => {
    /* eslint-disable-next-line */
    console.log(props);
    return (
        <div>
            Navlist
        </div>
    );
};

Navlist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
        })
    ),
};

export default Navlist;
