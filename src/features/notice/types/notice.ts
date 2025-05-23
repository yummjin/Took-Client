export type NoticeType = 'MESSAGE' | 'NOTIFICATION';

export type Notice = {
  id: number;
  title: string;
  type: NoticeType;
  date: string;
};
