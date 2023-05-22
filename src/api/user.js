import { AxiosError } from "axios";
import client from "../lib/client";
import JWTToken from "../lib/token";

export const fetchUser = async (userId) => {
  const token = JWTToken.getToken();
  try {
    const { data } = await client.get(`/users/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (err) {
    let errorMessage;
    if (err instanceof AxiosError) {
      // axios error
      errorMessage = err.response?.data?.message || "Something Went Wrong";
    } else {
      errorMessage = "Something Went Wrong";
    }
    return { data: null, error: errorMessage };
  }
};
export const fetchUsers = async (page = 1, name = "") => {
  const token = JWTToken.getToken();
  try {
    const { data } = await client.get("/users", {
      headers: {
        Authorization: token,
      },
      params: {
        page: page,
        name: name,
      },
    });
    return data;
  } catch (err) {
    let errorMessage;
    if (err instanceof AxiosError) {
      // axios error
      errorMessage = err.response?.data?.message || "Something Went Wrong";
    } else {
      errorMessage = "Something Went Wrong";
    }
    return { data: null, error: errorMessage };
  }
};
