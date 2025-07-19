// frontend/graphql/environment.ts

import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';

const fetchGraphQL: FetchFunction = async (operation, variables) => {
  const response = await fetch('http://34.93.202.99:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add authorization token if needed
      // Authorization: `Bearer ${your_token}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return await response.json();
};

const relayEnvironment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});

export default relayEnvironment;

