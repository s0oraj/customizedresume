import React from 'react';
import { Resume } from './components/Resume';
import { theme } from './theme/colors';

export function App() {
  return (
    <div className={`flex w-full min-h-screen ${theme.bgMain}`}>
      <Resume />
    </div>
  );
}