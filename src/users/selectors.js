import get from 'lodash.get';

export const getUsersList = source =>
  get(source, 'viewer.allUsers.edges', [])
    .map(record => record.node);

export const getUserDetails = source =>
  get(source, 'viewer.User', {});
