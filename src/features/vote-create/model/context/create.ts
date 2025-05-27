import { createContext, type Dispatch, type SetStateAction } from 'react';

export const VoteCreateContext = createContext<{
  mode: number;
  setMode: Dispatch<SetStateAction<number>>;
  isCandidateMode: boolean;
  setIsCandidateMode: Dispatch<SetStateAction<boolean>>;
} | null>(null);
