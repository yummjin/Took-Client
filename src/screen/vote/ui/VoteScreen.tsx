import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { VoteBg } from '@/assets/image';
import { VoteContainer } from '@/widgets/vote/ui';

export default function VoteScreen() {
  return (
    <>
      <AppScreen
        backgroundImage={`url(${VoteBg})`}
        appBar={TitleAppBar('', VoteBg)}
      >
        <VoteContainer />
      </AppScreen>
    </>
  );
}
