import gql from "graphql-tag";
import { NOTE_FRAGMENT } from "./fragments";

export const GET_NOTES = gql`
  {
    notes @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;
