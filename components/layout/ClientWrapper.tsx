'use client';

import dynamic from 'next/dynamic';

// Dynamic imports to avoid SSR issues
const LiveChat = dynamic(() => import('@/components/ui/LiveChat'), { 
  ssr: false,
  loading: () => null 
});

const WaitingList = dynamic(() => import('@/components/ui/WaitingList'), { 
  ssr: false,
  loading: () => null 
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <LiveChat />
      <WaitingList />
    </>
  );
}
