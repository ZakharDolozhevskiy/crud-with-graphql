import gql from 'graphql-tag';

export const UPDATE_USER = gql`
    mutation updateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            id: clientMutationId
            user {
                id
                name
                active
                email
                createdAt
                updatedAt
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($input: SignupUserInput!) {
        createUser(input: $input) {
            id: clientMutationId
            user {
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

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!, $clientMutationId: String!) {
        deleteUser(input: { id: $id, clientMutationId: $clientMutationId }) {
            deletedId
        }
    }
`;