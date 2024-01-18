'use client';
import { NextUIProvider } from '@nextui-org/react';
const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default LayoutProvider;
