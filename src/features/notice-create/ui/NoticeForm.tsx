import NoticeFormButton from './NoticeFormButton';
import NoticeFormInput from './NoticeFormInput';
import NoticeFormItem from './NoticeFormItem';

export default function NoticeForm() {
  return (
    <div className="p-normal scrollbar-hide size-full space-y-6 overflow-scroll pb-38">
      <NoticeFormItem label="공지 유형이 무엇인가요?" required>
        <div className="items-center space-x-[10px]">
          <NoticeFormButton label="알림" />
          <NoticeFormButton label="선거 공지" />
        </div>
      </NoticeFormItem>
      <NoticeFormItem label="어떤 캠퍼스 공지인가요?">
        <div className="items-center space-x-[10px]">
          <NoticeFormButton label="수원캠" />
          <NoticeFormButton label="서울캠" />
        </div>
      </NoticeFormItem>
      <NoticeFormItem label="기간">
        <div className="flex w-full items-center gap-x-[10px]">
          <div className="border-sl h-[46px] flex-1 rounded-md border-[1px] px-5 py-[11px] focus:outline-none" />
          ~
          <div className="border-sl h-[46px] flex-1 rounded-md border-[1px] px-5 py-[11px] focus:outline-none" />
        </div>
      </NoticeFormItem>
      <NoticeFormItem label="제목">
        <NoticeFormInput />
      </NoticeFormItem>
      <NoticeFormItem label="내용">
        <textarea className="border-sl h-42 w-full resize-none rounded-md border-[1px] px-5 py-[18px] focus:outline-none" />
      </NoticeFormItem>
    </div>
  );
}
