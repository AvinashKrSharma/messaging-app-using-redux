// used to create a channel when that channel is not created already in opencontactchannel
import { makeActionCreator } from '../utility';

export const REQUEST_CREATE_CHANNEL = `REQUEST_CREATE_CHANNEL`;
export const requestCreateChannel = makeActionCreator(REQUEST_CREATE_CHANNEL, `channelID`,`contactID`,`ownID`,`channelName`);
