import type { Dispatch, SetStateAction } from 'react';

import { useBottomSheet } from '@/shared/hook';
import { BottomSheet } from '@/shared/ui';
import { BOTTOM_SHEET } from '@/shared/constants';
import { cn } from '@/shared/utils';

interface LoginBottomSheetProps {
  setSelectedYear: Dispatch<SetStateAction<number>>;
  selectedYear: number;
}

export default function LoginBottomSheet({
  selectedYear,
  setSelectedYear,
}: LoginBottomSheetProps) {
  const { closeBottomSheet, bottomSheetState } = useBottomSheet();
  const { isOpen } = bottomSheetState(BOTTOM_SHEET.VOTE_RESULT);
  const year = Array.from({ length: 10 }, (_, i) => 2024 - i);

  const handleSelectYear = (selectedYear: number) => {
    setSelectedYear(selectedYear);
    closeBottomSheet(BOTTOM_SHEET.VOTE_RESULT);
  };

  return (
    <>
      {isOpen && (
        <BottomSheet sheetKey={BOTTOM_SHEET.VOTE_RESULT}>
          <div className="flex w-full justify-center">
            <div className="h-[6px] w-[46px] rounded-full bg-[#ECECEC]" />
          </div>
          <p className="my-[23px] text-center text-xl font-semibold">
            년도를 선택해주세요
          </p>
          <div className="scrollbar-hide flex h-[220px] w-full flex-col items-center gap-y-[23px] overflow-scroll">
            {year.map(y => (
              <button
                key={y}
                name={`${y}`}
                onClick={() => handleSelectYear(y)}
                className={cn(
                  selectedYear === y && 'text-ml',
                  'active:text-ml text-xl font-semibold',
                )}
              >
                {y}
              </button>
            ))}
          </div>
        </BottomSheet>
      )}
    </>
  );
}
