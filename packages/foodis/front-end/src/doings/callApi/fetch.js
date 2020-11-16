import isomorphicFetch from "isomorphic-fetch";

export const dependencies = { isomorphicFetch };

export default (url, params) => dependencies.isomorphicFetch(url, params);
