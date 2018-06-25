import gql from 'graphql-tag';

export const GET_USERS = gql`
  query GetUsers($showActiveUsers: Boolean) {
      viewer {
          allUsers(filter: { active: $showActiveUsers }) {
              edges {
                  node {
                      id
                      name
                  }
              }
          }
      }
  }
`;