import React from 'react'
import { submitChannelInputText } from './../../actions';
import { connect } from 'react-redux'
import { activeChannelSelector, currentUserSelector } from './../../selectors';
import { CurrentChannelTextInput } from './CurrentChannelTextInput';

// todo... add actions and selectors

const mapStateToProps = (state) => {
    const activeChannel = activeChannelSelector(state);
    return {
        activeChannel: activeChannel,
        text: activeChannel.get('currentUserText'),
        fetchStatus: activeChannel.get('fetchStatus'),
        userStatus: currentUserSelector(state).get('status')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text,channel) => {
            console.log("Update text...");
        },
        submitMessage: (text,channel) => {
          dispatch(submitChannelInputText(channel, text))
        }
    }
};

export const CurrentChannelTextInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CurrentChannelTextInput);
