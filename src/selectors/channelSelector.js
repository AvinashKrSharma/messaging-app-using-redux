import { createSelector } from 'reselect';

export const channelSelector = (id)=>createSelector(
  (state) => { return state.get(`channels`) },
  (channels) => { return channels.find(
    (channel) => { return channel.get(`id`) === id }
  )}
);
