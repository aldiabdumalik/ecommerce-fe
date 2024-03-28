'use client';
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import QueryProvider from './QueryProvider';

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}
