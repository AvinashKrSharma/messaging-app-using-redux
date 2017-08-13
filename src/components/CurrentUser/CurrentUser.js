import React from 'react';
import { ONLINE, OFFLINE, AWAY } from './../../actions';

export const CurrentUser = ({name, status, id, updateStatus}) => {
  return <div>
    <div>
      <h3>
        Hi {name}
      </h3>
    </div>
    <div>
      <select value={status} onChange={updateStatus} className="form-control">
        <option value={OFFLINE}>OFFLINE</option>
        <option value={ONLINE}>ONLINE</option>
        <option value={AWAY}>AWAY</option>
      </select>
    </div>
  </div>
};
