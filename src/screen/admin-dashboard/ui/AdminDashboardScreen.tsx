import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import { AdminDashboardContainer } from '@/widgets/admin-dashboard/ui';

export default function AdminDashboardScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('관리자 대시보드')}>
      <AdminDashboardContainer />
    </AppScreen>
  );
}
