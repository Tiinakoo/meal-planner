import isomorphicFetch from "isomorphic-fetch";

import fetch, { dependencies } from "./fetch";

describe("fetch", () => {
  it("has correct dependencies", () => {
    expect(dependencies).toEqual({ isomorphicFetch });
  });

  describe("given stubbed dependencies", () => {
    let isomorphicFetchMock;

    beforeEach(() => {
      isomorphicFetchMock = jest.fn(() => "some-return-value");

      dependencies.isomorphicFetch = isomorphicFetchMock;
    });

    describe("when called", () => {
      let actual;

      beforeEach(() => {
        actual = fetch("/some/url", { some: "parameters" });
      });

      it("calls isomorphic-fetch with correct parameters", () => {
        expect(isomorphicFetchMock).toHaveBeenCalledWith("/some/url", {
          some: "parameters",
        });
      });

      it("returns value from isomorphic-fetch", () => {
        expect(actual).toBe("some-return-value");
      });
    });
  });
});
