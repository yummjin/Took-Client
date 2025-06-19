import VoteInput from './VoteInput';

export default function VoteCandidateForm() {
  return (
    <>
      <p className="mt-11 flex flex-col items-start text-lg font-semibold">
        정후보자 등록하기
      </p>
      <div className="mt-[18px] flex w-full flex-col gap-[14px]">
        <VoteInput placeholder="정후보자 이름" />
        <VoteInput placeholder="학번" />
        <VoteInput placeholder="소속 단과대" />
        <VoteInput placeholder="학과" />
        <div className="border-sl flex h-45 w-full flex-col gap-y-2.5 rounded-md border-[1px] p-5 font-normal">
          <textarea
            className="flex-1 resize-none text-black placeholder:text-[#999] focus:outline-none"
            placeholder="약력을 짧게 작성해주세요"
          />
        </div>
      </div>
    </>
  );
}
