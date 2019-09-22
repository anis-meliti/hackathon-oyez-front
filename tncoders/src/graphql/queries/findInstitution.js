import { gql } from "apollo-boost";

const FIND_INSTITUTIONS = gql`
query($input: String) {
  FindInstitution(input: $input) {
    id
    name
    tags
    rating
  }
}`;

export default FIND_INSTITUTIONS;