import GaugeChart from 'react-gauge-chart';

export default function VoteGaugeChart({ percent }: { percent: number }) {
  return (
    <>
      <div className="mb-7 flex w-full flex-col">
        <GaugeChart
          id="gauge-chart1"
          arcsLength={[percent, 1 - percent]}
          arcPadding={0}
          arcWidth={0.42}
          cornerRadius={0}
          colors={['#5ba5f8', '#ecf5fe']}
          needleColor="transparent"
          needleBaseColor="transparent"
          textColor="#377ff8"
          hideText
          animate={false}
        />
        <div className="relative size-full">
          <div className="absolute bottom-5 left-1/2 flex h-12 w-32 -translate-x-1/2 transform items-center justify-center rounded-t-full">
            <div className="flex flex-col items-center">
              <span className="text-m text-2xl font-bold">
                {percent * 100}%
              </span>
              <span className="text-res font-medium">투표완료</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-7 flex w-full justify-center">
        <div className="flex w-fit items-center gap-x-4">
          <div className="from-grad2 to-grad1 size-5 rounded-full bg-linear-to-r" />
          <span>투표 완료</span>
          <div className="bg-sxl size-5 rounded-full" />
          <span>투표 미완료</span>
        </div>
      </div>
    </>
  );
}
