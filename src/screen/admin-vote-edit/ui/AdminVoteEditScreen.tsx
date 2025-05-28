import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { VoteBg } from '@/assets/image';

export default function AdminVoteEditScreen() {
  return (
    <>
      <AppScreen
        backgroundImage={`url(${VoteBg})`}
        appBar={TitleAppBar('', VoteBg)}
      >
        <div className="p-normal size-full"></div>
      </AppScreen>
    </>
  );
}
