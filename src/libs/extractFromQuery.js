export const extractFromQuery = data => data.src && data.src.page
    ? data.src.page
    /*eslint-disable-next-line*/
    : console.log('Wrong query!\nData must have a structure like: `data.src.page`')
;