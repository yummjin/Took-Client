import { useState } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import { TitleAppBar } from '@/shared/ui';
import {
  VoteResultBottomSheet,
  VoteResultContainer,
} from '@/widgets/vote-result/ui';

export default function VoteResultScreen() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  return (
    <>
      <AppScreen backgroundColor="#fff" appBar={TitleAppBar('선거결과')}>
        <VoteResultContainer selectedYear={selectedYear} />
      </AppScreen>
      <VoteResultBottomSheet
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
    </>
  );
}
