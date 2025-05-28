import { VoteGaugeChart } from '@/features/admin-vote-status/ui';
import { DateBadge } from '@/shared/ui';

export default function AdminVoteStatusContainer() {
  return (
    <div className="p-normal flex h-fit w-full flex-col">
      <p className="text-s mt-mt mb-2 font-medium">2025 총학생회 선거</p>
      <div className="mb-15 flex w-full flex-col gap-y-1">
        <div className="flex justify-between">
          <div className="flex items-center text-2xl font-bold">
            총&nbsp;
            <span className="text-m"> 6,396명</span>이
          </div>
          <DateBadge date={6} />
        </div>
        <p className="text-2xl font-bold">투표를 완료했어요!</p>
      </div>
      <VoteGaugeChart percent={0.7} />
      <div className="shadow-resultItem flex w-full flex-col gap-y-[7px] p-5">
        <p>실시간 후보 득표율</p>
        <p className="text-res text-sm">구름 운동본부</p>
        <div className="from-grad2 to-grad1 h-6 w-[80%] bg-linear-to-r" />
        <p className="text-res text-sm">하늘 운동본부</p>
        <div className="from-grad2 to-grad1 h-6 w-[30%] bg-linear-to-r" />
      </div>
    </div>
  );
}
