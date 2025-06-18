import { useFlow } from '@/app/stackflow';
import { NoticeForm } from '@/features/notice-create/ui';
import { Button } from '@/shared/ui';

export default function NoticeCreateContainer() {
  const { pop } = useFlow();
  return (
    <>
      <NoticeForm />
      <div className="shadow-voteCreateDock px-normal fixed bottom-0 flex w-full gap-x-[9px] bg-white pt-4 pb-15">
        <Button
          intent="gradient"
          className="flex-1 text-lg"
          onClick={() => pop({ animate: false })}
        >
          작성 완료
        </Button>
      </div>
    </>
  );
}
