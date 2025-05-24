import { AppScreen } from '@stackflow/plugin-basic-ui';

import { useFlow } from '@/app/stackflow';
import { Button, NoBackAppBar } from '@/shared/ui';
import { VoteBg } from '@/assets/image';
import { VoteCompleteIcon } from '@/assets/icon';

export default function VoteCompleteScreen() {
  const { pop } = useFlow();

  return (
    <>
      <AppScreen
        preventSwipeBack
        backgroundImage={`url(${VoteBg})`}
        appBar={NoBackAppBar('', VoteBg)}
      >
        <div className="p-normal flex size-full flex-col">
          <p className="text-m mt-mt mb-2.5 text-center text-4xl font-bold">
            투표를 완료했어요!
          </p>
          <p className="text-s mb-12 text-center text-xl font-semibold">
            소중한 한 표 감사합니다
          </p>
          <img src={VoteCompleteIcon} alt="voteComplete" className="mb-20" />
          <Button intent="gradient" onClick={() => pop({ animate: false })}>
            홈으로 돌아가기
          </Button>
        </div>
      </AppScreen>
    </>
  );
}
