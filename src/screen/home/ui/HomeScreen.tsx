import { AppScreen } from '@stackflow/plugin-basic-ui';

import { HomeBg } from '@/assets/image';
import { HomeAppBar } from '@/shared/ui';
import { HomeContainer } from '@/widgets/home/ui';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';

export default function HomeScreen() {
  const { replace } = useFlow();

  return (
    <AppScreen
      preventSwipeBack
      backgroundImage={`url(${HomeBg})`}
      appBar={HomeAppBar(
        () => replace(PATH.LOGIN, {}),
        () => {},
      )}
    >
      <HomeContainer />
    </AppScreen>
  );
}
