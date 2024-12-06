import React from 'react';

import MentoringHeader from '@repo/client/components/header/MentoringHeader';

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full relative">
      <MentoringHeader />
      {children}
    </main>
  );
}
