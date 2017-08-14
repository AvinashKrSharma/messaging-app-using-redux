import { createSelector } from 'reselect';

export const activeChannelSelector = createSelector(
  (state) => { return state.get(`activeChannel`) },
  (state) => { return state.get(`channels`) },
  (activeChannel, channels) => { return channels.find(
    (channel) => { return channel.get(`id`)=== activeChannel }
  )}
);
