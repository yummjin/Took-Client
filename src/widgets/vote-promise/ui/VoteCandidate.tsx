interface VoteCandidateProps {
  name: string;
}
export default function VoteCandidate({ name }: VoteCandidateProps) {
  return (
    <>
      <p className="mb-1.5 text-2xl font-bold">정후보자 {name}</p>
      <p className="mb-2.5 font-normal">컴퓨터공학부 04</p>
      <p className="text-s text-sm">기아기아 최강기아 역임</p>
      <p className="text-s text-sm">기아의 해결사 역임</p>
    </>
  );
}
