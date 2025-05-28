import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { AdminVoteStatusContainer } from '@/widgets/admin-vote-status/ui';

export default function AdminVoteStatusScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('투표 진행상황')}>
      <AdminVoteStatusContainer />
    </AppScreen>
  );
}
