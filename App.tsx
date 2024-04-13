import React from 'react';
import HomePage from './src/screens/HomePage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
