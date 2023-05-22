import { AxiosError } from "axios";
import client from "../lib/client";
import JWTToken from "../lib/token";

export const fetchRole = async (id) => {
  const token = JWTToken.getToken();
  try {
    const { data } = await client.get(`/roles/${id}`, {
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

export const addNewRole = async (body) => {
  const token = JWTToken.getToken();
  try {
    const { data } = await client.post("/roles", body, {
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
