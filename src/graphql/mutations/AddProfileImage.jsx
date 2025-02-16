
import { gql } from "@apollo/client";
export const UPDATE_PROFILE_IMAGE = gql`
    mutation UpdateProfileImage($id: ID!, $profileImage: String!) {
      updateProfileImage(id: $id, profileImage: $profileImage) {
       
        user {
          profileImage
        }
      }
    }
  `;