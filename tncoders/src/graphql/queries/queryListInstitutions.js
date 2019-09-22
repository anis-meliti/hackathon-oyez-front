import { gql } from "apollo-boost";

const GET_ALL_INSTITUTIONS = gql`
query{
  institutions {
      id
      name
      rating
    }
}`

export default GET_ALL_INSTITUTIONS;