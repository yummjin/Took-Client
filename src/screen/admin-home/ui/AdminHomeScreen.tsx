import { VoteBg } from '@/assets/image';
import { AdminAppBar } from '@/shared/ui';
import { AdminHomeContainer } from '@/widgets/admin-home/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';

export default function AdminHomeScreen() {
  return (
    <AppScreen
      preventSwipeBack
      backgroundImage={`url(${VoteBg})`}
      appBar={AdminAppBar}
    >
      <AdminHomeContainer />
    </AppScreen>
  );
}
