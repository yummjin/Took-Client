/* eslint-disable react-refresh/only-export-components */
import { RiLogoutCircleRLine } from 'react-icons/ri';

import { BackButton, UserIcon } from '@/assets/icon';
import { HomeBg, LoginBg, VoteBg } from '@/assets/image';
import type { MouseEvent } from 'react';

const baseStyle = { height: '58px', border: false };

export const BasicAppBar = {
  ...baseStyle,
  backgroundImage: `url(${LoginBg})`,
  renderLeft: () => (
    <span className="logo text-m ml-[4px] text-3xl">took!</span>
  ),
};

export const HomeAppBar = {
  ...baseStyle,
  backgroundImage: `url(${HomeBg})`,
  renderLeft: () => (
    <span className="logo text-m ml-[4px] text-3xl">took!</span>
  ),
  renderRight: () => <img src={UserIcon} alt="user" className="mr-[4px]" />,
};

export const AdminAppBar = (onLogoutClick: () => void) => ({
  ...baseStyle,
  backgroundImage: `url(${VoteBg})`,
  renderLeft: () => (
    <span className="logo text-m ml-[4px] text-3xl">took!</span>
  ),
  renderRight: () => (
    <button
      className="text-m mr-[4px] flex items-center gap-x-1"
      onClick={onLogoutClick}
    >
      <span>로그아웃</span>
      <RiLogoutCircleRLine size={24} />
    </button>
  ),
});

export const TitleAppBar = (title?: string, bgImage?: string) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  backgroundImage: `url(${bgImage})`,
  title: title || '',
});

export const NoBackAppBar = (title?: string, bgImage?: string) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  backgroundImage: `url(${bgImage})`,
  title: title || '',
  backButton: { renderIcon: () => <></> },
});

export const NoBackLogoAppBar = (bgImage?: string) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  backgroundImage: `url(${bgImage})`,
  renderLeft: () => (
    <span className="logo text-m ml-[4px] text-3xl font-semibold">took!</span>
  ),
  backButton: { renderIcon: () => <></> },
});

export const VoteCreateAppBar = (
  title: string,
  onBackButtonClick: (e: MouseEvent<HTMLButtonElement>) => void,
) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  title: title || '',
  backButton: {
    onClick: onBackButtonClick,
    renderIcon: () => (
      <div>
        <img src={BackButton} />
      </div>
    ),
  },
});
