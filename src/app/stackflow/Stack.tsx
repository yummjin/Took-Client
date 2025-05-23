import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import { LoginScreen } from '@/screen/login/ui';
import { HomeScreen } from '@/screen/home/ui';
import { NoticeScreen } from '@/screen/notice/ui';
import { NoticeContentScreen } from '@/screen/notice-content/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { NoticeScreen, NoticeContentScreen, LoginScreen, HomeScreen },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'LoginScreen',
});
