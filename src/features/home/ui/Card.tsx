import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';
import { Button } from '@/shared/ui';

interface CardProps {
  campus: string;
  status: string;
  title: string;
  date: string;
}

export default function Card({ campus, status, title, date }: CardProps) {
  const { push } = useFlow();

  return (
    <>
      <div className="mb-5 flex w-full justify-between">
        <div className="flex gap-x-1">
          <div className="bg-m/10 text-m rounded-full px-[12px] py-[6px] text-[13px] font-light">
            {campus}
          </div>
          <div className="bg-m/10 text-m rounded-full px-[12px] py-[6px] text-[13px] font-light">
            {status}
          </div>
        </div>
        <div className="bg-sxl flex items-center rounded-full p-1.5 text-sm text-[#999]">
          D-7
        </div>
      </div>
      <p className="text-md mb-2.5 text-2xl font-semibold">{title}</p>
      <p className="text-s mb-[34px] font-normal">{date}</p>
      <Button intent="gradient" size="md" onClick={() => push(PATH.VOTE, {})}>
        투표하기
      </Button>
    </>
  );
}
