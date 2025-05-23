import type { Notice } from '../types';

export const NOTICE_MOCK: Notice[] = [
  {
    id: 1,
    title: '2025년 봄학기 개강 안내',
    type: 'NOTIFICATION',
    date: '2025-03-01',
  },
  {
    id: 2,
    title: '홈페이지 점검 일정 안내',
    type: 'NOTIFICATION',
    date: '2025-03-05',
  },
  {
    id: 3,
    title: '중간고사 일정 공지',
    type: 'NOTIFICATION',
    date: '2025-04-10',
  },
  {
    id: 4,
    title: '신입생 오리엔테이션 안내',
    type: 'NOTIFICATION',
    date: '2025-02-25',
  },
  {
    id: 5,
    title: '장학금 신청 기간 안내',
    type: 'MESSAGE',
    date: '2025-03-15',
  },
  {
    id: 6,
    title: '건물 전기 점검에 따른 이용 제한 안내',
    type: 'MESSAGE',
    date: '2025-03-20',
  },
];
