import { LoginForm } from '@/features/login/ui';

export default function LoginContainer() {
  return (
    <div className="p-normal grid size-full place-items-center">
      <div className="shadow-login box-border grid h-[530px] w-full place-items-center rounded-lg border-[1px] border-white bg-white/50 p-6 backdrop-blur-sm">
        <div className="flex w-full flex-col gap-y-15">
          <div className="flex w-full flex-col">
            <span className="text-md text-4xl font-semibold">로그인 후</span>
            <span className="text-md text-4xl font-semibold">
              간편하게 투표하세요!
            </span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
