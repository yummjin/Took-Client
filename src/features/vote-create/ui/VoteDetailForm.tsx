import { useVoteCreateContext } from '../model';
import { VoteButton, VoteCandidateForm, VoteInput } from '.';

interface VoteDetailFormProps {
  teamName: string;
}

export default function VoteDetailForm({ teamName }: VoteDetailFormProps) {
  const { isCandidateMode, setIsCandidateMode } = useVoteCreateContext();

  return (
    <>
      {isCandidateMode ? (
        <VoteCandidateForm />
      ) : (
        <>
          <div className="mt-11 flex flex-col items-start text-lg font-semibold">
            <p>
              <span className="text-m">'{teamName}'</span> 선거운동본부
            </p>
            <p>후보자를 입력해주세요</p>
          </div>
          <div className="text-s mt-[18px] flex w-full flex-col gap-[14px]">
            <VoteButton
              label="정후보자"
              onClick={() => setIsCandidateMode(true)}
            />
            <VoteButton
              label="부후보자"
              onClick={() => setIsCandidateMode(true)}
            />
            <VoteInput placeholder="핵심 공약 1" />
          </div>
        </>
      )}
    </>
  );
}
