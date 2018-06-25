import gql from 'graphql-tag';

export const GET_USERS = gql`
    query getUsers($active: Boolean) {
        viewer {
            allUsers(filter: { active: $active }) {
                edges {
                    node {
                        id
                        name
                        active
                        createdAt
                        email
                        name
                        updatedAt
                    }
                }
            }
        }
    }
`;

export const GET_USER_DETAILS = gql`
    query GetUsersDetails($id: ID) {
        viewer {
            User(id: $id) {
                id
                active
                createdAt
                email
                name
                updatedAt
            }
        }
    }
`;
