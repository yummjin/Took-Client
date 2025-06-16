import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import { AdminDashboardScreen } from '@/screen/admin-dashboard/ui';
import { AdminHomeScreen } from '@/screen/admin-home/ui';
import { AdminVoteEditScreen } from '@/screen/admin-vote-edit/ui';
import { AdminVoteResultScreen } from '@/screen/admin-vote-result/ui';
import { AdminVoteStatusScreen } from '@/screen/admin-vote-status/ui';
import { HomeScreen } from '@/screen/home/ui';
import { LoginScreen } from '@/screen/login/ui';
import { NoticeContentScreen } from '@/screen/notice-content/ui';
import { NoticeScreen } from '@/screen/notice/ui';
import { VoteCompleteScreen } from '@/screen/vote-complete/ui';
import { VoteCreateCompleteScreen } from '@/screen/vote-create-complete/ui';
import { VoteCreateScreen } from '@/screen/vote-create/ui';
import { VotePromiseScreen } from '@/screen/vote-promise/ui';
import { VoteResultContentScreen } from '@/screen/vote-result-content/ui';
import { VoteResultScreen } from '@/screen/vote-result/ui';
import { VoteScreen } from '@/screen/vote/ui';
import { VoteEditScreen } from '@/screen/vote-edit/ui';
import { EntryScreen } from '@/screen/entry/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    AdminDashboardScreen,
    AdminVoteResultScreen,
    AdminVoteStatusScreen,
    AdminVoteEditScreen,
    AdminHomeScreen,
    EntryScreen,
    NoticeScreen,
    NoticeContentScreen,
    VoteEditScreen,
    VoteScreen,
    VoteCreateScreen,
    VoteCreateCompleteScreen,
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
  initialActivity: () => 'EntryScreen',
});
