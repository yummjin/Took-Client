import { AppScreen } from '@stackflow/plugin-basic-ui';

import { LoginBg } from '@/assets/image';
import { BasicAppBar } from '@/shared/ui';
import { LoginContainer } from '@/widgets/login/ui';

export default function LoginScreen() {
  return (
    <AppScreen
      preventSwipeBack
      backgroundImage={`url(${LoginBg})`}
      appBar={BasicAppBar}
    >
      <LoginContainer />
    </AppScreen>
  );
}
