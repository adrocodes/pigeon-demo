import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: `${process.env.HYGRAPH_ENDPOINT}`,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  name: "hygraph",
})

export { client }
