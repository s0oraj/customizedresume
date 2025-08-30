import React from 'react';
import { theme } from '../../theme/colors';

interface SectionTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function SectionTitle({
  children,
  icon
}: SectionTitleProps) {
  return <div className={`border-b ${theme.borderPrimary} pb-1 mb-3`}>
      <h2 className={`text-xl font-bold ${theme.brandPrimary}`}>{children}</h2>
    </div>;
}