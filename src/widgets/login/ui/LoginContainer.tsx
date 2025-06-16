import { useFlow } from '@/app/stackflow';
import { Character2, KakaoIcon } from '@/assets/icon';
import { PATH } from '@/shared/constants';
import { Button } from '@/shared/ui';

export default function LoginContainer() {
  const { replace } = useFlow();

  return (
    <div className="p-normal flex size-full flex-col space-y-15">
      <p className="mt-mt text-4xl leading-snug font-semibold">
        카카오 로그인 후<br />
        안전하게 took
        <br />
        투표해보세요!
      </p>
      <img src={Character2} />
      <Button
        intent="kakao"
        className="flex items-center justify-center gap-2 py-[14px] text-lg"
        onClick={() => replace(PATH.HOME, {})}
      >
        <img src={KakaoIcon} />
        카카오 로그인
      </Button>
    </div>
  );
}
