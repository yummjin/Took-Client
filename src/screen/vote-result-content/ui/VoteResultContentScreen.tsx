import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { VoteResultContentContainer } from '@/widgets/vote-result-content/ui';

export default function VoteResultContentScreen() {
  return (
    <>
      <AppScreen backgroundColor="#fff" appBar={TitleAppBar()}>
        <VoteResultContentContainer />
      </AppScreen>
    </>
  );
}
