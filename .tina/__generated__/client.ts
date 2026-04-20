import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'e80b2e4888549325e84dbd3ef4bc570bb004bc1c', queries,  });
export default client;
  