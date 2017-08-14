// when a user selects a channel from list, this action sets the clicked channel as active
import { makeActionCreator } from '../utility';

export const SET_ACTIVE_CHANNEL = `SET_ACTIVE_CHANNEL`;
export const setActiveChannel = makeActionCreator(SET_ACTIVE_CHANNEL, `id`);
