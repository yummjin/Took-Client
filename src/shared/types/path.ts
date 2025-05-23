import type { PATH } from '../constants';

export type PathItem = (typeof PATH)[keyof typeof PATH];
