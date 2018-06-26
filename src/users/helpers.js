import get from 'lodash.get';

export const getUsersList = source =>
  get(source, 'viewer.allUsers.edges', [])
    .map(record => record.node);

export const addUserToQuery = (source, user) =>
  source.viewer.allUsers.edges =
    source.viewer.allUsers.edges
      .concat({ node: user, __typename: 'UserEdge' });

export const deleteUserFromQuery = (source, id) =>
  source.viewer.allUsers.edges =
    source.viewer.allUsers.edges
      .filter(edge => edge.node.id !== id);
