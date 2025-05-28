import { Card } from '@/shared/ui';

export default function CardList() {
  return (
    <div className="scrollbar-hide px-normal flex size-full flex-1 flex-col gap-y-[26px] overflow-scroll">
      <Card
        campus="서울"
        title="골든글러브"
        status="진행중"
        date="000"
        className="mt-11"
      />
      <Card
        campus="서울"
        title="골든글러브"
        status="진행중"
        date="2024.04.19 - 2024.04.24"
      />
      <Card
        campus="서울"
        title="골든글러브"
        status="진행중"
        date="2024.04.19 - 2024.04.24"
      />
      <Card
        campus="서울"
        title="골든글러브"
        status="진행중"
        date="2024.04.19 - 2024.04.24"
      />
    </div>
  );
}
