import { NOTICE_MOCK } from '../mock';
import NoticeItem from './NoticeItem';

export default function NoticeList() {
  return (
    <div className="flex w-full flex-1 flex-shrink-0 flex-col divide-y divide-[#ECECEC] overflow-scroll">
      {NOTICE_MOCK.map(({ id, title, type, date }) => (
        <NoticeItem key={id} id={id} title={title} type={type} date={date} />
      ))}
    </div>
  );
}
