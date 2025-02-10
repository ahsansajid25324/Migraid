import {jwtDecode} from "jwt-decode";

export const getUserId = () => {
  const token = localStorage.getItem("token"); // or sessionStorage
  if (!token) return null;

  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.id; // Make sure 'userId' exists in your token payload
  } catch (error) {
    console.error("Invalid Token", error);
    return null;
  }
};


