import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function getContext() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 默认缓存时间：5分钟
        staleTime: 5 * 60 * 1000,
        // 垃圾回收时间：10分钟
        gcTime: 10 * 60 * 1000,
        // 失败重试次数
        retry: 1,
        // 窗口重新聚焦时重新获取
        refetchOnWindowFocus: false,
        // 网络重新连接时重新获取
        refetchOnReconnect: true,
        // 默认不启用 suspense
        suspense: false,
      },
      mutations: {
        // 失败重试次数
        retry: 1,
      },
    },
  });
  
  return {
    queryClient,
  };
}

export function Provider({
  children,
  queryClient,
}: {
  children: React.ReactNode;
  queryClient: QueryClient;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
