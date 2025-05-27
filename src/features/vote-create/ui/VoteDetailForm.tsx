import { IoChevronDownSharp } from 'react-icons/io5';
import { useVoteCreateContext } from '../model';
import { VoteButton, VoteCandidateForm } from '.';

export default function VoteDetailForm() {
  const { isCandidateMode, setIsCandidateMode } = useVoteCreateContext();

  return (
    <>
      {isCandidateMode ? (
        <VoteCandidateForm />
      ) : (
        <>
          <div className="mt-11 flex flex-col items-start text-lg font-semibold">
            <p>'구름' 선거운동본부</p>
            <p>후보자를 입력해주세요</p>
          </div>
          <div className="text-s mt-[18px] flex w-full flex-col gap-[14px] text-lg font-semibold">
            <VoteButton
              label="정후보자"
              onClick={() => setIsCandidateMode(true)}
            />
            <VoteButton
              label="부후보자"
              onClick={() => setIsCandidateMode(true)}
            />
            <div className="border-sl flex h-45 w-full flex-col gap-y-2.5 rounded-md border-[1px] p-5">
              <div className="flex items-center justify-between">
                핵심공약을 입력해주세요
                <IoChevronDownSharp size={20} className="text-sl" />
              </div>
              <textarea className="flex-1 resize-none font-medium text-black focus:outline-none"></textarea>
            </div>
          </div>
        </>
      )}
    </>
  );
}
