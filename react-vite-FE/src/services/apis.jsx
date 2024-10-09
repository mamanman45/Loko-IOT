import instance from "./axiosConfig";

const baseUrl = import.meta.env.VITE_API_URL;
const getLatest = import.meta.env.VITE_API_LATEST;

export const getLatestSummary = () => {
  return instance
    .get(getLatest)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
