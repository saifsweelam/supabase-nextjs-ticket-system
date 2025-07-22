"use client";
import { Tenant } from '@/types/Tenant';
import { createContext, useContext } from 'react';

const TenantContext = createContext<Tenant | undefined>(undefined);

export const TenantProvider = ({ children, tenant }: { children: React.ReactNode, tenant: Tenant }) => {

  return <TenantContext.Provider value={tenant}>{children}</TenantContext.Provider>;
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};
