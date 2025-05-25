import { useFlow } from '@/app/stackflow';

import { PATH } from '@/shared/constants';
import { Button, Input } from '@/shared/ui';

export default function LoginForm() {
  const { replace } = useFlow();

  return (
    <form className="flex w-full flex-col gap-y-15">
      <div className="flex w-full flex-col gap-[10px]">
        <Input
          intent="login"
          placeholder="학번 8자리"
          className="no-spinner"
          type="number"
        />
        <Input placeholder="패스워드" intent="login" type="password" />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Button type="button" onClick={() => replace(PATH.HOME, {})}>
          학생으로 로그인
        </Button>
        <Button
          intent="textmain"
          size="fit"
          onClick={() => replace(PATH.ADMIN_HOME, {})}
        >
          관리자로 로그인
        </Button>
      </div>
    </form>
  );
}
