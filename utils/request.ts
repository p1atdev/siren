import { RequestOption } from "../types/mod.ts";

const endpoint = "https://monster-siren.hypergryph.com/api";

/**
 * Send HTTP request to the API server.
 */
export const sendSirenRequest = async ({ path }: RequestOption) => {
  const response = await fetch(`${endpoint}${path}`);

  const json = await response.json();

  return json;
};
