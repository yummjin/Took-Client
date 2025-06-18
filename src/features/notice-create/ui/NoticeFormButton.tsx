import { cn } from '@/shared/utils';
import { useState } from 'react';

export default function NoticeFormButton({ label }: { label: string }) {
  const [selected, setSelected] = useState(false);
  return (
    <button
      onClick={() => setSelected(!selected)}
      className={cn(
        selected ? 'text-m border-m' : 'border-sl text-s',
        'cursor-pointer rounded-md border-[1px] px-[14px] py-1 text-sm focus:outline-none',
      )}
    >
      {label}
    </button>
  );
}
