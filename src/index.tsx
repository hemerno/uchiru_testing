import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from './styles/global.styles';
import App from './App';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.render(
  <QueryClientProvider client={client}>
    <GlobalStyles />
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
