import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { AdminVoteResultContainer } from '@/widgets/admin-vote-result/ui';

export default function AdminVoteResultScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('투표 상세보기')}>
      <AdminVoteResultContainer />
    </AppScreen>
  );
}
