import { IoChevronDownSharp } from 'react-icons/io5';

import { BOTTOM_SHEET } from '@/shared/constants';
import { useBottomSheet } from '@/shared/hook';
import { cn } from '@/shared/utils';

import { VoteResultItem } from '@/widgets/vote-result/ui';

interface VoteResultContainerProps {
  selectedYear: number;
}

export default function VoteResultContainer({
  selectedYear,
}: VoteResultContainerProps) {
  const { openBottomSheet, bottomSheetState } = useBottomSheet();
  const { isOpen } = bottomSheetState(BOTTOM_SHEET.VOTE_RESULT);

  return (
    <div className="p-normal flex size-full flex-col pr-0 pb-0">
      <div className="mb-[22px] flex w-full justify-end">
        <button
          name="pickYear"
          className={cn(
            isOpen ? 'bg-m text-white' : 'text-m',
            'border-m mr-normal active:bg-m flex items-center gap-1 rounded-[14px] border-[1.5px] px-4 py-1 text-sm active:text-white',
          )}
          onClick={() => openBottomSheet(BOTTOM_SHEET.VOTE_RESULT)}
        >
          년도 선택 <IoChevronDownSharp size={18} />
        </button>
      </div>
      <div className="scrollbar-hide flex w-full flex-1 gap-[30px] overflow-scroll">
        <span className="text-m text-lg font-semibold">{selectedYear}</span>
        <div className="mr-normal flex h-full flex-1 flex-col gap-y-[17px]">
          <VoteResultItem />
          <VoteResultItem />
          <VoteResultItem />
          <VoteResultItem />
          <VoteResultItem />
        </div>
      </div>
    </div>
  );
}
