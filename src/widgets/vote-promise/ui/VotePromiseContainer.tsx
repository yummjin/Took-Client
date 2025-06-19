import { useState } from 'react';
import VotePromiseCard from './VotePromiseCard';
import { cn } from '@/shared/utils';
import { Button } from '@/shared/ui';
import { useFlow } from '@/app/stackflow';

export default function VotePromiseContainer() {
  const [selectedCard, setSelectedCard] = useState(0);
  const { pop } = useFlow();
  const promises = Array.from({ length: 2 });

  return (
    <div className="p-normal flex size-full flex-col items-center">
      <p className="mb-11 text-center text-lg font-semibold">
        카드를 탭해서 뒤집어보세요!
      </p>
      <VotePromiseCard />
      <div className="my-7 flex w-full justify-center">
        <div className="flex gap-[22px]">
          {promises.map((_, i) => (
            <button
              key={i}
              className={cn(
                selectedCard === i
                  ? 'border-m bg-mxl text-m border-[1px]'
                  : 'text-sl bg-white',
                'grid size-15 place-items-center rounded-lg text-3xl font-bold',
              )}
              onClick={() => setSelectedCard(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Button intent="gradient" onClick={() => pop()}>
        확인했어요
      </Button>
    </div>
  );
}
