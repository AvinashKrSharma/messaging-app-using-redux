// whenever a user clicks the chat button to start a new channel,
// it's either created if not created before or the old channel is opened.
import { chance } from './../utility';
import { setActiveChannel, requestCreateChannel } from './';
import { currentUserSelector, userSelector } from './../selectors';

export const openContactChannel = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    // find all channels where number of participants == 2 and has id as of the current user
    const existingChannel = state.get(`channels`).find(
      (channel) => { return channel.get(`participants`).size === 2 && channel.get(`participants`).includes(id) }
    );
    // return old channel or create new one
    if (existingChannel) {
      dispatch(setActiveChannel(existingChannel.get(`id`)));
    } else {
      const channelID = chance.guid();
      const currentUserID = currentUserSelector(state).get(`id`);
      const channelName =  `${currentUserSelector(state).get(`name`)} and ${userSelector(id)(state).get(`name`)}'s Private Chat`;
      dispatch(requestCreateChannel(channelID, id, currentUserID, channelName));
      dispatch(setActiveChannel(channelID));
    }
  };
}
