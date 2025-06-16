import { AppScreen } from '@stackflow/plugin-basic-ui';

import { VoteBg } from '@/assets/image';
import { LoginContainer } from '@/widgets/login/ui';
import { NoBackLogoAppBar } from '@/shared/ui';

export default function LoginScreen() {
  return (
    <AppScreen
      preventSwipeBack
      backgroundImage={`url(${VoteBg})`}
      appBar={NoBackLogoAppBar(VoteBg)}
    >
      <LoginContainer />
    </AppScreen>
  );
}
