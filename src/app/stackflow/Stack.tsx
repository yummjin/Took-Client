import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import { LoginScreen } from '@/screen/login/ui';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { LoginScreen },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'LoginScreen',
});
