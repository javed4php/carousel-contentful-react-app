import { ApolloClient, InMemoryCache } from "@apollo/client";

// Replace these values with your own
const SPACE_ID = "dc7422gpu1ul";
const ACCESS_TOKEN = "md2J_y2MsCW7aYRuBV-fSQhZGDJnlihCwlgdrjw-guA";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;



