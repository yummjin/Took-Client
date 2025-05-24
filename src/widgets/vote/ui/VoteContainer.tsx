import { useState } from 'react';

import { IoChevronForwardSharp } from 'react-icons/io5';
import { useFlow } from '@/app/stackflow';

import { Button } from '@/shared/ui';
import { PATH } from '@/shared/constants';

import { VoteItem } from '@/widgets/vote/ui';
import { VOTE_MOCK } from '@/widgets/vote/mock';

export default function VoteContainer() {
  const [selected, setSelected] = useState(-1);
  const { push, replace } = useFlow();

  const handleClick = (index: number) => {
    if (selected === index) setSelected(-1);
    else setSelected(index);
  };

  return (
    <div className="p-normal flex size-full flex-col">
      <div className="mt-mt mb-[10px] flex w-full flex-col text-3xl font-bold">
        <p>2025학년도</p>
        <p>총학생회 선거 후보</p>
      </div>
      <p className="text-s mb-[50px] text-lg font-semibold">
        공약을 살펴보고 신중하게 투표해주세요
      </p>
      <Button
        className="bg-ml mb-6 flex h-17 items-center justify-between rounded-lg px-5 text-start text-lg"
        onClick={() => push(PATH.VOTE_PROMISE, {})}
      >
        후보자 공약 보러가기
        <IoChevronForwardSharp size={20} />
      </Button>
      <div className="relative mb-21 flex w-full gap-x-[10px]">
        {VOTE_MOCK.map(({ title, candidates }, index) => (
          <VoteItem
            key={index}
            title={title}
            candidates={candidates}
            selected={selected === index}
            onClick={() => handleClick(index)}
          />
        ))}
        <div className="bg-md absolute top-19 left-1/2 grid size-[50px] -translate-x-1/2 -translate-y-1/2 transform place-items-center rounded-full text-xl font-semibold text-white">
          VS
        </div>
      </div>
      <Button
        intent={selected !== -1 ? 'gradient' : 'disabled'}
        onClick={() => replace(PATH.VOTE_COMPLETE, {}, { animate: false })}
      >
        투표완료
      </Button>
    </div>
  );
}
