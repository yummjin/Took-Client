import { useState, type ReactNode } from 'react';

import { VoteCreateContext } from '@/features/vote-create/model';

export default function VoteCreateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState(0);
  const [isCandidateMode, setIsCandidateMode] = useState<boolean>(false);

  return (
    <VoteCreateContext.Provider
      value={{
        mode,
        setMode,
        isCandidateMode,
        setIsCandidateMode,
      }}
    >
      {children}
    </VoteCreateContext.Provider>
  );
}
