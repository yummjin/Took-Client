import type { InputHTMLAttributes } from 'react';
import { IoClose } from 'react-icons/io5';

type VoteInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function VoteInput({ placeholder }: VoteInputProps) {
  return (
    <div className="relative w-full">
      <input
        className="border-sl placeholder:text-s flex h-17 w-full items-center justify-between rounded-md border-[1px] px-5 focus:outline-none"
        placeholder={placeholder}
      />
      <button className="absolute top-1/2 right-5 size-fit -translate-y-1/2 transform cursor-pointer focus:outline-none">
        <IoClose className="text-sl" size={20} />
      </button>
    </div>
  );
}
