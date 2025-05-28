import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';

export default function AdminVoteResultScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('투표 상세보기')}>
      <div className="p-normal size-full"></div>
    </AppScreen>
  );
}
