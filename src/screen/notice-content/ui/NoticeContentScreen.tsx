import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import type { Notice } from '@/features/notice/types';
import type { ActivityComponentType } from '@stackflow/react';
import { NoticeContentContainer } from '@/widgets/notice-content/ui';

const NoticeContentScreen: ActivityComponentType<{ notice: Notice }> = ({
  params,
}: {
  params: { notice: Notice };
}) => {
  return (
    <AppScreen
      preventSwipeBack
      backgroundColor="#fff"
      appBar={TitleAppBar('공지사항')}
    >
      <NoticeContentContainer title={params.notice.title} />
    </AppScreen>
  );
};

export default NoticeContentScreen;
