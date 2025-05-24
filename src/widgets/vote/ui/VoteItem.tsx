import { cn } from '@/shared/utils';
import type { ButtonHTMLAttributes } from 'react';
import { FaCheck } from 'react-icons/fa';

interface VoteItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  title: string;
  candidates: string[];
}

export default function VoteItem({
  selected,
  onClick,
  title,
  candidates,
}: VoteItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        selected ? 'border-m bg-mxl' : 'border-sl bg-white',
        'group active:border-m active:bg-mxl shadow-voteItem pt-normal flex h-[236px] flex-1 cursor-pointer flex-col items-center rounded-lg border-[1px] transition duration-150 focus:outline-none',
      )}
    >
      <div
        className={cn(
          selected ? 'bg-ml' : 'bg-sl',
          'group-active:bg-ml mb-1.5 grid size-6 place-items-center rounded-full transition duration-150',
        )}
      >
        <FaCheck className="text-white" size={14} />
      </div>
      <p className="mb-1 text-2xl font-bold">{title}</p>
      <p className="text-lg font-semibold">선거운동본부</p>
      <div className="mt-normal bg-m/10 mb-[10px] h-[1px] w-25" />
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-1">
        <div className="text-m flex flex-col items-center">
          <p>정후보자</p>
          <p>정후보자</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{candidates[0]}</p>
          <p>{candidates[1]}</p>
        </div>
      </div>
    </button>
  );
}
