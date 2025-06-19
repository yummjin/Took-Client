import { VoteButton, VoteInput } from '@/features/vote-create/ui';

export default function VoteTitleForm() {
  return (
    <>
      <p className="mt-11 text-lg font-semibold">선거 정보 등록하기</p>
      <div className="mt-[18px] flex w-full flex-col gap-[14px] font-semibold">
        <VoteInput placeholder="투표 제목을 입력하세요" />
        <VoteButton label="투표 시작일을 선택하세요" arrowDown />
        <VoteButton label="투표 종료일을 선택하세요" arrowDown />
      </div>
      <p className="mt-6 text-lg font-semibold">선거운동본부 등록하기</p>
      <div className="mt-[18px] flex w-full flex-col gap-[14px]">
        <VoteInput placeholder="후보팀명을 입력하세요" />
        <VoteInput placeholder="후보팀명을 입력하세요" />
      </div>
    </>
  );
}
