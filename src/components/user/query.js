import gql from 'graphql-tag';

export const GET_USER_DETAILS = gql`
    query GetUsersDetails($id: ID) {
        viewer {
            User(id: $id) {
                active
                createdAt
                email
                name
                updatedAt
            }
        }
    }
`;