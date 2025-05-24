export default function NoticeContainer({ title }: { title: string }) {
  const data =
    '안녕하세요, 툭팀입니다.\n\n현재 투표 서비스 이용 중 일부 사용자에게 접속 지연 및 오류 현상이 발생하고 있어 확인중에 있습니다.\n\n불편을 드려 대단히 죄송합니다.\n\n기술팀이 신속하게 원인을 파악하여 조치 중이며, 최대한 빠른 시간 내에 정상화될 수 있도록 하겠습니다.\n\n오늘 오후 중 복구 예정\n(변동 시 추가 공지 드리겠습니다.)\n\n서비스 이용에 불편을 드린 점 다시 한 번 사과드리며, 빠른 시일 내에 안정적인 서비스로 찾아뵙겠습니다.\n\n감사합니다.\n\n툭 서비스 운영팀 드림';

  return (
    <div className="p-normal scrollbar-hide flex size-full flex-col overflow-scroll">
      <p className="mt-mt text-lg font-semibold">{title}</p>
      <p className="mb-[14px] text-sm font-normal tracking-wide text-[#999]">
        2025.03.19
      </p>
      <hr className="mb-10 text-[#DADADA]" />
      <div className="flex flex-col gap-1 text-[#767676]">
        {data.split('\n').map((line, index) => (
          <div key={index} className="mb-1">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
