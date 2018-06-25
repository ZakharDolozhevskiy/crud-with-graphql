import get from 'lodash.get';

export const extractUserData = source =>
  get(source, 'viewer.User', {});