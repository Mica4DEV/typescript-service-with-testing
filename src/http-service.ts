import axios from "axios";

export function buildHttpService(token: string) {
  return axios.create({
    baseURL: "https://test.com",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
