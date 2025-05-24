import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { VotePromiseBg } from '@/assets/image';
import { VotePromiseContainer } from '@/widgets/vote-promise/ui';

export default function VotePromiseScreen() {
  return (
    <>
      <AppScreen
        backgroundImage={`url(${VotePromiseBg})`}
        appBar={TitleAppBar('', VotePromiseBg)}
      >
        <VotePromiseContainer />
      </AppScreen>
    </>
  );
}
