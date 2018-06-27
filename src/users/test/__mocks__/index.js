import { GET_USERS } from '../../queries';
import { DELETE_USER, CREATE_USER, UPDATE_USER } from '../../mutations';

jest.mock('shortid', () => () => '123');
jest.mock('moment', () => id => ({ fromNow: () => id }));

export const user = {
  id: 1,
  name: 'User',
  active: true,
  createdAt: '0',
  email: 'test@email',
  updatedAt: '1'
};

const defaultUser = { name: 'Guest', email: '', active: true };

const getUsersMock = {
  request: { query: GET_USERS, variables: { active: true } },
  result: {
    data: {
      viewer: {
        allUsers: {
          edges: [ { node: user } ]
        }
      }
    }
  }
};

const deleteUserMock = {
    request: {
      query: DELETE_USER,
      variables: {
        id: 1,
        clientMutationId: 1
      }
    },
    result: {
      data: {
        deleteUser: {
          deletedId: 1
        }
      }
    }
  };

const updateUserMock = {
  request: {
    query: UPDATE_USER,
    variables: {
      input: {
        id: user.id,
        name: user.name,
        email: user.email,
        active: !user.active,
        clientMutationId: user.id
      }
    }
  },
  result: {
    data: {
      updateUser: {
        id: 1,
        user: {
          ...user,
          active: false
        }
      }
    }
  },
};

const createUserMock = {
  request: {
    query: CREATE_USER,
    variables: {
      input: {
        name: defaultUser.name,
        email: defaultUser.email,
        active: defaultUser.active,
        clientMutationId: '123'
      }
    }
  },
  result: {
    data: {
      createUser: {
        id: 1,
        user: {
          ...defaultUser,
          createdAt: '0',
          updatedAt: '1',
          id: 1
        }
      }
    }
  },
};

export default [
  getUsersMock,
  updateUserMock,
  deleteUserMock,
  createUserMock
];