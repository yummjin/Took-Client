import { VoteCreateProvider } from '@/features/vote-create/model';
import { VoteCreateContainer } from '@/widgets/vote-create/ui';

export default function VoteCreateScreen() {
  return (
    <VoteCreateProvider>
      <VoteCreateContainer />
    </VoteCreateProvider>
  );
}
