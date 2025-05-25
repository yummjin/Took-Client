import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import { LoginScreen } from '@/screen/login/ui';
import { HomeScreen } from '@/screen/home/ui';
import { NoticeScreen } from '@/screen/notice/ui';
import { NoticeContentScreen } from '@/screen/notice-content/ui';
import { VoteResultScreen } from '@/screen/vote-result/ui';
import { VoteResultContentScreen } from '@/screen/vote-result-content/ui';
import { VoteScreen } from '@/screen/vote/ui';
import { VotePromiseScreen } from '@/screen/vote-promise/ui';
import { VoteCompleteScreen } from '@/screen/vote-complete/ui';
import { AdminHomeScreen } from '@/screen/admin-home/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    AdminHomeScreen,
    NoticeScreen,
    NoticeContentScreen,
    VoteScreen,
    VoteCompleteScreen,
    VotePromiseScreen,
    VoteResultScreen,
    VoteResultContentScreen,
    LoginScreen,
    HomeScreen,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'LoginScreen',
});
