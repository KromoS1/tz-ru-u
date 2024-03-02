import {useState} from 'react';
import {ProviderPropsType} from '../types';
import {QueryClient, QueryClientProvider} from 'react-query';

export const withQuery = (component: ProviderPropsType) => (props: any) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <>{component(props)}</>
    </QueryClientProvider>
  );
};
