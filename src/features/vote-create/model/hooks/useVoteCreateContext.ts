import { useContext } from 'react';
import { VoteCreateContext } from '@/features/vote-create/model';

export default function useVoteCreateContext() {
  const context = useContext(VoteCreateContext);
  if (!context) {
    throw new Error(
      'useVoteCreateContext는 VoteCreateProvider 안에서만 사용할 수 있어요.',
    );
  }
  return context;
}
