import { useState } from 'react';
import { motion } from 'framer-motion';

import { VerifiedCheckIcon } from '@/assets/icon';
import VoteCandidate from './VoteCandidate';
import { cn } from '@/shared/utils';

export default function VotePromiseCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective h-100 w-[304px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="transform-style preserve-3d relative h-full w-full transition-transform duration-500"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          type: 'tween',
          duration: 0.2,
          ease: 'linear',
        }}
      >
        <CardFront />
        <CardBack />
      </motion.div>
    </div>
  );
}

const CardFront = () => (
  <div className="border-m shadow-voteItem absolute flex h-full w-full flex-col rounded-lg border-[1px] bg-white p-6 backface-hidden">
    <div className="mb-5 flex w-full justify-between">
      <TeamBadge team="기아" />
      <span className="text-m font-normal">1/2</span>
    </div>
    <div className="mb-[34px] flex w-full flex-col">
      <VoteCandidate name="최형우" />
    </div>
    <div className="flex w-full flex-col">
      <VoteCandidate name="김도영" />
    </div>
  </div>
);

const CardBack = () => (
  <div className="border-m shadow-voteItem bg-mxl absolute flex h-full w-full rotate-y-180 flex-col rounded-lg border-[1px] p-6 backface-hidden">
    <div className="mb-5 flex w-full justify-between">
      <TeamBadge team="기아" flipped />
      <span className="text-m font-normal">2/2</span>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-m mb-[30px] text-center text-2xl font-bold">
        '기아'의 핵심공약
      </p>
      <div className="flex flex-col gap-1 font-normal">
        <VotePromise promise="기숙사 개선" />
        <VotePromise promise="교내 와이파이 개선" />
        <VotePromise promise="전공과목 인원 확대" />
        <VotePromise promise="교내 강의동 시설 보수" />
        <VotePromise promise="다양한 행사 활성화" />
      </div>
    </div>
  </div>
);

const TeamBadge = ({
  team,
  flipped = false,
}: {
  team: string;
  flipped?: boolean;
}) => (
  <div
    className={cn(
      flipped ? 'bg-m' : 'bg-md',
      'rounded-full px-5 py-1 font-normal text-white',
    )}
  >
    {team}
  </div>
);

const VotePromise = ({ promise }: { promise: string }) => (
  <div className="flex items-center gap-x-[10px]">
    <img src={VerifiedCheckIcon} alt="verifiedCheck" />
    {promise}
  </div>
);
