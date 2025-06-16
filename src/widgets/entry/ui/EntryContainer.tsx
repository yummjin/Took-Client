import { useFlow } from '@/app/stackflow';
import { Character, TextBoxIcon } from '@/assets/icon';
import { PATH } from '@/shared/constants';
import { Button } from '@/shared/ui';

export default function EntryContainer() {
  const { replace } = useFlow();

  return (
    <div className="flex size-full flex-col overflow-hidden">
      <div className="-ml-[14px] w-[500px]">
        <img src={Character} className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-0 z-10 flex h-[70%] w-full flex-col items-center rounded-t-lg border-t-[2px] border-white bg-white/50 p-10 backdrop-blur-[2px]">
        <div className="relative">
          <img src={TextBoxIcon} className="w-63" />
          <span className="absolute top-2.25 left-1/2 z-20 -translate-x-1/2 text-lg font-semibold text-nowrap text-white">
            간단하게, 빠르게, 안전하게
          </span>
        </div>
        <span className="text-m logo -mt-5 text-[86px] font-bold">took!</span>
        <div className="w-full space-y-5">
          <p className="text-s text-center text-lg">어떻게 시작할까요?</p>
          <Button
            intent="login"
            className="py-[14px] text-lg"
            onClick={() => replace(PATH.LOGIN, {})}
          >
            학생으로 시작하기
          </Button>
          <Button
            intent="loginWhite"
            className="py-[14px] text-lg"
            onClick={() => replace(PATH.LOGIN, {})}
          >
            관리자로 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
