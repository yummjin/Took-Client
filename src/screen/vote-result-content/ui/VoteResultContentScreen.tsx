import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';

export default function VoteResultContentScreen() {
  return (
    <>
      <AppScreen backgroundColor="#fff" appBar={TitleAppBar()}>
        VoteResultContentScreen
      </AppScreen>
    </>
  );
}
