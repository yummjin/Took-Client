export default function VoteResultItem() {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <div className="flex w-full items-center gap-x-[18px]">
        <div className="bg-m size-[9px] rounded-full" />
        <span className="text-xl font-semibold">소프트웨어경영대학 선거</span>
      </div>
      <div className="w-full overflow-visible border-l-[1.5px] border-[#E9E9E9] py-[15px] pl-3">
        <div className="shadow-resultItem text-s flex w-full flex-col gap-y-[6px] rounded-lg px-3 py-5 font-medium">
          <p>2025.03.20 - 2025.05.01</p>
          <p>총 후보자 2</p>
        </div>
      </div>
    </div>
  );
}
