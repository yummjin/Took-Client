import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { NoticeCreateContainer } from '@/widgets/notice-create/ui';

export default function NoticeCreateScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('공지사항')}>
      <NoticeCreateContainer />
    </AppScreen>
  );
}
