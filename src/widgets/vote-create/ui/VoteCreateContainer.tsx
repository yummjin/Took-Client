import type { MouseEvent } from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import { useFlow } from '@/app/stackflow';

import { cn } from '@/shared/utils';
import { Button, VoteCreateAppBar } from '@/shared/ui';

import { useVoteCreateContext } from '@/features/vote-create/model';
import { VoteDetailForm, VoteTitleForm } from '@/features/vote-create/ui';

export default function VoteCreateContainer() {
  const { mode, setMode, isCandidateMode, setIsCandidateMode } =
    useVoteCreateContext();
  const { pop } = useFlow();

  const handleBackClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isCandidateMode) {
      setIsCandidateMode(false);
      return;
    }
    if (mode === 0) pop();
    else setMode(prev => prev - 1);
  };

  const MODE = [<VoteTitleForm />, <VoteDetailForm />];

  return (
    <AppScreen
      backgroundColor="#fff"
      appBar={VoteCreateAppBar('투표 생성', handleBackClick)}
    >
      <div className="fixed top-[58px] h-[6px] w-full bg-[#F5F5F5]">
        <div
          className={cn(
            mode === 0
              ? 'w-1/3'
              : mode === 1
                ? 'w-2/3'
                : mode === 2 && 'w-full',
            'bg-m h-full rounded-r-full',
          )}
        />
      </div>
      <div className="p-normal scrollbar-hide h-full overflow-scroll pt-0 pb-38">
        {MODE[mode]}
      </div>
      <div className="shadow-voteCreateDock px-normal fixed bottom-0 flex w-full gap-x-[9px] bg-white pt-4 pb-15">
        <Button intent="disabled" className="flex-1 text-lg">
          임시저장
        </Button>
        <Button
          intent="disabled"
          className="flex-1 text-lg"
          onClick={() => setMode(prev => prev + 1)}
        >
          다음
        </Button>
      </div>
    </AppScreen>
  );
}
