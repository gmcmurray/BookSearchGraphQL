
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
 query me {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      title
      link
      image
      description
      authors
      
    }
  }
}
`;
