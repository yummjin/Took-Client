export default function DateBadge({ date }: { date: number }) {
  return (
    <div className="bg-sxl flex items-center rounded-full p-1.5 text-sm text-[#999]">
      D-{date}
    </div>
  );
}
