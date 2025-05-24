import { useState } from 'react';
import { motion } from 'framer-motion';

import { VerifiedCheckIcon } from '@/assets/icon';

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
  <div className="border-m p-normal shadow-voteItem absolute flex h-full w-full flex-col rounded-lg border-[1px] bg-white backface-hidden">
    <div className="mb-5 flex w-full justify-between">
      <div className="bg-md rounded-full px-5 py-0.5 text-lg text-white">
        기아
      </div>
      <span className="text-m text-lg font-semibold">1/2</span>
    </div>
    <div className="mb-[34px] flex w-full flex-col">
      <p className="mb-1.5 text-2xl font-bold">정후보자 최형우</p>
      <p className="mb-2.5 text-lg font-semibold">컴퓨터공학부 04</p>
      <p className="text-s text-sm">기아기아 최강기아 역임</p>
      <p className="text-s text-sm">기아의 해결사 역임</p>
    </div>
    <div className="flex w-full flex-col">
      <p className="mb-1.5 text-2xl font-bold">부후보자 김도영</p>
      <p className="mb-2.5 text-lg font-semibold">컴퓨터공학부 22</p>
      <p className="text-s text-sm">2024년 신인상 아마도 수상</p>
      <p className="text-s text-sm">30도루 30홈런 기록</p>
    </div>
  </div>
);

const CardBack = () => (
  <div className="border-m p-normal shadow-voteItem bg-mxl absolute flex h-full w-full rotate-y-180 flex-col rounded-lg border-[1px] backface-hidden">
    <div className="mb-5 flex w-full justify-between">
      <div className="bg-m rounded-full px-5 py-0.5 text-lg text-white">
        기아
      </div>
      <span className="text-m text-lg font-semibold">2/2</span>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-m mb-[30px] text-center text-2xl font-bold">
        '기아'의 핵심공약
      </p>
      <div className="flex flex-col gap-1 text-lg font-medium">
        <div className="flex items-center gap-x-[10px]">
          <img src={VerifiedCheckIcon} alt="verifiedCheck" />
          기아에 의한 기아를 위한 기아
        </div>
        <div className="flex items-center gap-x-[10px]">
          <img src={VerifiedCheckIcon} alt="verifiedCheck" />
          팬들을 화나지 않게 하는 야구
        </div>
        <div className="flex items-center gap-x-[10px]">
          <img src={VerifiedCheckIcon} alt="verifiedCheck" />
          못하면 빼고, 잘하면 콜업
        </div>
      </div>
    </div>
  </div>
);
