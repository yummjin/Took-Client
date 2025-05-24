import { VoteIcon } from '@/assets/icon';

export default function VoteResultContentContainer() {
  return (
    <div className="p-normal flex size-full flex-col">
      <div className="mt-mt mb-2 flex w-full flex-col text-2xl font-bold">
        <p>투표자의 64%가</p>
        <p>
          <span className="text-m">구름</span> 선거운동본부를 선택했어요.
        </p>
      </div>
      <p className="text-s">총 6,936명이 투표를 완료했어요!</p>
      <div className="shadow-resultContent mt-5 grid h-[409px] w-full place-items-center rounded-lg p-[23px]">
        <div className="flex w-full flex-col items-center gap-y-[53px]">
          <img src={VoteIcon} alt="vote" className="size-[100px]" />
          <div className="flex w-full flex-col gap-y-[14px]">
            <div className="border-sl relative h-14 w-full rounded-md border-[1.5px]">
              <div className="bg-sl flex h-full w-[36%] items-center rounded-[6px] pl-6 text-lg font-semibold">
                하늘
              </div>
              <span className="absolute top-4 right-6">36%</span>
            </div>
            <div className="border-ml relative h-14 w-full rounded-md border-[1.5px]">
              <div className="bg-ml flex h-full w-[64%] items-center rounded-[6px] pl-6 text-lg font-semibold text-white">
                구름
              </div>
              <span className="text-ml absolute top-4 right-6">64%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
