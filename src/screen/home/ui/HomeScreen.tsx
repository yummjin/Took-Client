import { AppScreen } from '@stackflow/plugin-basic-ui';

import { HomeBg } from '@/assets/image';
import { HomeAppBar } from '@/shared/ui';
import { HomeContainer } from '@/widgets/home/ui';

export default function HomeScreen() {
  return (
    <AppScreen
      preventSwipeBack
      backgroundImage={`url(${HomeBg})`}
      appBar={HomeAppBar}
    >
      <HomeContainer />
    </AppScreen>
  );
}
