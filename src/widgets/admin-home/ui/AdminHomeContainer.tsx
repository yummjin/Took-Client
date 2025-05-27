import { useFlow } from '@/app/stackflow';
import { CreateVoteIcon, DashBoardIcon } from '@/assets/icon';
import { PATH } from '@/shared/constants';
import type { PathItem } from '@/shared/types';

interface AdminHomeButtonProps {
  title: string;
  to: PathItem;
  icon: string;
}

export default function AdminHomeContainer() {
  return (
    <div className="p-normal size-full">
      <p className="mt-mt text-4xl font-bold">안녕하세요, 관리자님</p>
      <p className="text-s mt-[14px] text-lg font-semibold">
        어떤 서비스를 찾으시나요?
      </p>
      <div className="mt-9 flex w-full flex-col gap-y-5">
        <AdminHomeButton
          title="투표 생성하기"
          to={PATH.VOTE_CREATE}
          icon={CreateVoteIcon}
        />
        <AdminHomeButton
          title="대시보드 보기"
          to={PATH.ADMIN_DASHBOARD}
          icon={DashBoardIcon}
        />
      </div>
    </div>
  );
}

const AdminHomeButton = ({ title, to, icon }: AdminHomeButtonProps) => {
  const { push } = useFlow();

  return (
    <button
      className="border-m shadow-voteItem grid h-[232px] w-full cursor-pointer place-items-center rounded-lg border-[1px] bg-white/30"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={() => push(to, { notice: {} as any })}
      /**해당 라인의 경우 notice content screen으로 절대 이동하지 않을 버튼입니다.
       * 하지만 타입 에러가 발생하여 다음과 같이 불가피하게 any 타입으로 처리합니다.*/
    >
      <div className="relative flex h-[232px] w-[270px] flex-col items-center">
        <img src={icon} className="mb-8 size-50" />
        <div className="bg-md absolute top-36 grid h-14 w-[270px] place-items-center rounded-md text-xl font-semibold text-white">
          {title}
        </div>
      </div>
    </button>
  );
};
