import { AxiosError } from "axios";
import client from "../lib/client";

export const login = async (email, password) => {
  try {
    const { data } = await client.post("/auth/login", {
      email,
      password,
    });
    return { data, error: null };
  } catch (err) {
    let errorMessage;
    if (err instanceof AxiosError) {
      // axios error
      errorMessage = err.response?.data?.error || "Something Went Wrong";
    } else {
      errorMessage = "Something Went Wrong";
    }
    return { data: null, error: errorMessage };
  }
};
