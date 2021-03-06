import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($bookId: String!, $title: String!,$description: String,$authors: [String],  $image: String,$link: String) {
    addBook(bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link:$link) {
      _id
        username
        email
        savedBooks {
            authors
            description
            image
            link
            title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
			email
			savedBooks {
				bookId
				authors
				description
				image
				link
				title
			}
    }
  }
`;





