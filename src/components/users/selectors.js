import get from 'lodash.get';

export const extractUsers = source =>
  get(source, 'viewer.allUsers.edges', []);