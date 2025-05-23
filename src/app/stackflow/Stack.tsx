import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

import { LoginScreen } from '@/screen/login/ui';
import { HomeScreen } from '@/screen/home/ui';
import { NoticeScreen } from '@/screen/notice/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { NoticeScreen, LoginScreen, HomeScreen },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'LoginScreen',
});
