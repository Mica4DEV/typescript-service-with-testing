import axios, { AxiosInstance } from "axios";

jest.mock("axios");

import { buildHttpService } from "../src/http-service";

describe("HttpService", () => {
  test("should return prepared axios instance", () => {
    jest.spyOn(axios, "create").mockReturnValue({} as unknown as AxiosInstance);
    expect(buildHttpService("token")).toBeTruthy();
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: "https://test.com",
      headers: {
        Authorization: "Bearer token",
      },
    });
  });
});
