'use client';
import { NextUIProvider } from '@nextui-org/system';
const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default LayoutProvider;
