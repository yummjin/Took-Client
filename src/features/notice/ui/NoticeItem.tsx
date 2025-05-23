import { MessageIcon, NotificationIcon } from '@/assets/icon';
import type { Notice } from '../types';

import { cn } from '@/shared/utils';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';

export default function NoticeItem({ id, title, type, date }: Notice) {
  const typeLabel = type === 'NOTIFICATION' ? '알림' : '예정';
  const { push } = useFlow();

  return (
    <button
      name={`${id}`}
      className="flex w-full cursor-pointer items-center overflow-hidden px-5 py-6 focus:outline-none"
      onClick={() =>
        push(PATH.NOTICE_CONTENT, { notice: { id, title, type, date } })
      }
    >
      <img
        src={type === 'NOTIFICATION' ? NotificationIcon : MessageIcon}
        className="shadow-noticeItem size-10 rounded-md"
      />
      <div className="ml-[10px] flex w-full flex-col items-start">
        <div className="flex w-full justify-between text-lg font-semibold">
          <p className="w-52 overflow-hidden text-start text-nowrap text-ellipsis">
            {title}
          </p>
          <div
            className={cn(
              type === 'NOTIFICATION'
                ? 'bg-red-500/20 text-red-600'
                : 'bg-mxl text-m',
              'flex w-13 items-center justify-center rounded-[6px] py-0.5 text-sm font-medium',
            )}
          >
            {typeLabel}
          </div>
        </div>
        <p className="text-mid font-medium text-[#999]">{date}</p>
      </div>
    </button>
  );
}
