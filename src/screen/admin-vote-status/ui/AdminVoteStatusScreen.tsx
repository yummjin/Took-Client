import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';

export default function AdminVoteStatusScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('투표 진행상황')}>
      <div className="p-normal size-full"></div>
    </AppScreen>
  );
}
