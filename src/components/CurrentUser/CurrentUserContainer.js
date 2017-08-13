import { connect } from 'react-redux';
import { CurrentUser } from './CurrentUser';

export const CurrentUserContainer = connect(
  (state) => {
    const currentUser = state.get('currentUser');
    return {
      name: currentUser.get('name'),
      status: currentUser.get('status'),
      id: currentUser.get('id')
    }
  }, (dispatch) => {
    return {
      updateStatus: ({target: {value}}) => {
        console.log("Updating status", value);
      }
    }
  }
)(CurrentUser);
