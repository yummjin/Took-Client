import { AppScreen } from '@stackflow/plugin-basic-ui';
import { HiPlus } from 'react-icons/hi';
import { IoChevronDownSharp, IoClose } from 'react-icons/io5';

import { Button, TitleAppBar } from '@/shared/ui';

export default function VoteCreateScreen() {
  return (
    <AppScreen backgroundColor="#fff" appBar={TitleAppBar('투표 생성')}>
      <div className="fixed top-[58px] h-[6px] w-full bg-[#F5F5F5]">
        <div className="bg-m h-full w-[33%] rounded-r-full" />
      </div>
      <div className="p-normal size-full pt-0">
        <p className="mt-11 text-lg font-semibold">선거 정보 등록하기</p>
        <div className="text-s mt-[18px] flex w-full flex-col gap-[14px] text-lg font-semibold">
          <input
            placeholder="투표 제목을 입력하세요"
            className="border-sl flex h-17 w-full items-center justify-between rounded-md border-[1px] px-5 focus:outline-none"
          />
          <div className="border-sl flex h-17 w-full items-center justify-between rounded-md border-[1px] px-5">
            투표 시작일을 선택하세요
            <IoChevronDownSharp size={20} className="text-sl" />
          </div>
          <div className="border-sl flex h-17 w-full items-center justify-between rounded-md border-[1px] px-5">
            투표 종료일을 선택하세요
            <IoChevronDownSharp size={20} className="text-sl" />
          </div>
        </div>
        <p className="mt-6 text-lg font-semibold">선거운동본부 등록하기</p>
        <div className="text-s mt-[18px] flex w-full flex-col gap-[14px] text-lg font-semibold">
          <div className="border-sl flex h-17 w-full items-center justify-between rounded-md border-[1px] px-5">
            후보팀명을 입력하세요
            <IoClose className="text-sl" size={20} />
          </div>
          <Button
            className="flex h-17 items-center justify-between px-5 text-lg font-semibold"
            intent="disabled"
          >
            <span>후보팀 추가하기</span>
            <HiPlus />
          </Button>
        </div>
        <div className="mt-17 flex w-full gap-x-[9px]">
          <Button intent="disabled" className="flex-1 text-lg">
            임시저장
          </Button>
          <Button intent="disabled" className="flex-1 text-lg">
            다음
          </Button>
        </div>
      </div>
    </AppScreen>
  );
}
