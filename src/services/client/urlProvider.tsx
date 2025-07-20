"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { getPath, getPathParts } from '@/services/common/url';

export type URLContextType = {
    tenant: string;
    getPath: (path: string) => string;
    getPathParts: (path: string) => { tenant: string; resource: string };
};

const URLContext = createContext<URLContextType>({
    tenant: '',
    getPath: (path: string) => path,
    getPathParts: (path: string) => ({ tenant: '', resource: path }),
});

export const URLProvider = ({ children, tenant }: { children: React.ReactNode, tenant: string }) => {

  return <URLContext.Provider value={{
    tenant,
    getPath: (path) => getPath(path, tenant),
    getPathParts: (path) => getPathParts(path)
  }}>{children}</URLContext.Provider>;
};

export const useURL = () => {
  const context = useContext(URLContext);
  if (!context.tenant) {
    throw new Error('useURL must be used within a URLProvider');
  }
  return context;
};
