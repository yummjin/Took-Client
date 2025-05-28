import { useFlow } from '@/app/stackflow';
import { VoteBg } from '@/assets/image';
import { PATH } from '@/shared/constants';
import { AdminAppBar } from '@/shared/ui';
import { AdminHomeContainer } from '@/widgets/admin-home/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';

export default function AdminHomeScreen() {
  const { replace } = useFlow();

  return (
    <AppScreen
      preventSwipeBack
      backgroundImage={`url(${VoteBg})`}
      appBar={AdminAppBar(() => replace(PATH.LOGIN, {}))}
    >
      <AdminHomeContainer />
    </AppScreen>
  );
}
