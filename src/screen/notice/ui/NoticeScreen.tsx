import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { NoticeContainer } from '@/widgets/notice/ui';

export default function NoticeScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('공지사항')}>
      <NoticeContainer />
    </AppScreen>
  );
}
