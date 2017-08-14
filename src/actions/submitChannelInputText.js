// when a user types a message and hits submit, the text message is set using this action
import { chance } from './../utility';
import { currentUserSelector } from './../selectors'

export const SUBMIT_CHANNEL_INPUT_TEXT = `SUBMIT_CHANNEL_INPUT_TEXT`;
export const submitChannelInputText = (channel, text) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type:SUBMIT_CHANNEL_INPUT_TEXT,
      channel,
      text,
      owner:currentUserSelector(state).get(`id`),
      id:chance.guid()
    })
  };
};
