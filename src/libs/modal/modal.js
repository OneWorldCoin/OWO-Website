import eventManager from './utils/eventManager';
import { ACTION } from './utils/actions';

export const modal = {
    open: (type = '', data = {}, options = { onClose: () => {}, onOpen: () => {}}) =>
        eventManager.emit(ACTION.SHOW, type, data, options),
    close: () =>
        eventManager.emit(ACTION.CLEAR),
};