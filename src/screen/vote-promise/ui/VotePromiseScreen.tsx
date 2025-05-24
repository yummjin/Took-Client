import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { VotePromiseBg } from '@/assets/image';

export default function VoteScreen() {
  return (
    <>
      <AppScreen
        backgroundImage={`url(${VotePromiseBg})`}
        appBar={TitleAppBar('', VotePromiseBg)}
      >
        <div className="p-normal size-full">투표공약</div>
      </AppScreen>
    </>
  );
}
