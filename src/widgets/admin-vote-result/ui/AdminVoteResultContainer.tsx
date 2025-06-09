import { VoteGaugeChart } from '@/features/admin-vote-status/ui';

export default function AdminVoteStatusContainer() {
  return (
    <div className="p-normal flex h-fit w-full flex-col">
      <div className="mt-mt mb-2 flex w-full flex-col gap-y-1">
        <p className="text-2xl font-bold">투표자의 64%가</p>
        <p className="flex items-center text-2xl font-bold">
          <span className="text-m">구름</span>&nbsp;운동본부를 선택했어요.
        </p>
      </div>
      <p className="text-s mb-15 font-medium">총 6,234명이 투표를 완료했어요</p>
      <VoteGaugeChart percent={0.7} />
      <div className="shadow-resultItem flex w-full gap-y-[7px] rounded-lg px-5 py-7">
        <div className="text-m grid flex-1 place-items-center text-xl font-semibold">
          당선된 후보
        </div>
        <div className="grid flex-1 place-items-center">
          <div className="text-m flex flex-col items-center text-sm">
            <p>구름 운동본부</p>
            <p>(김유니, 이다브)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
