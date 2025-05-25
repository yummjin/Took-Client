import { CreateVoteIcon, DashBoardIcon } from '@/assets/icon';

export default function AdminHomeContainer() {
  return (
    <div className="p-normal size-full">
      <p className="mt-mt text-4xl font-bold">안녕하세요, 관리자님</p>
      <p className="text-s mt-[14px] text-lg font-semibold">
        어떤 서비스를 찾으시나요?
      </p>
      <div className="mt-9 flex w-full flex-col gap-y-5">
        <button className="border-m shadow-voteItem grid h-[232px] w-full cursor-pointer place-items-center rounded-lg border-[1px] bg-white/30">
          <div className="relative flex h-[232px] w-[270px] flex-col items-center">
            <img src={CreateVoteIcon} className="mb-8 size-50" />
            <div className="bg-md absolute top-36 grid h-14 w-[270px] place-items-center rounded-md text-xl font-semibold text-white">
              투표 생성하기
            </div>
          </div>
        </button>
        <button className="border-m shadow-voteItem grid h-[232px] w-full cursor-pointer place-items-center rounded-lg border-[1px] bg-white/30">
          <div className="relative flex h-[232px] w-[270px] flex-col items-center">
            <img src={DashBoardIcon} className="mb-8 size-50" />
            <div className="bg-md absolute top-36 grid h-14 w-[270px] place-items-center rounded-md text-xl font-semibold text-white">
              대시보드 보기
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
