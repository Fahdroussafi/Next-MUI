import axios from "axios";
import { AxiosError } from "axios";

export function getProjects() {
  return axios
    .get("http://localhost:3004/projects")
    .then((response) => response.data)
    .catch((err) => {
      let errorMessage;
      if (err instanceof AxiosError) {
        // axios error
        errorMessage = err.response?.data?.error || "Something Went Wrong";
      } else {
        errorMessage = "Something Went Wrong";
      }
      return { data: null, error: errorMessage };
    });
}
