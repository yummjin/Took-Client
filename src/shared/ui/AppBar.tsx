/* eslint-disable react-refresh/only-export-components */

import { BackButton, LogoutIcon, UserIcon, WriteIcon } from '@/assets/icon';
import { HomeBg, LoginBg, VoteBg } from '@/assets/image';
import type { MouseEvent } from 'react';

const baseStyle = { height: '58px', border: false };

export const BasicAppBar = {
  ...baseStyle,
  backgroundImage: `url(${LoginBg})`,
  renderLeft: () => Logo,
};

export const HomeAppBar = {
  ...baseStyle,
  backgroundImage: `url(${HomeBg})`,
  renderLeft: () => Logo,
  renderRight: () => <img src={UserIcon} alt="user" className="mr-[4px]" />,
};

export const AdminAppBar = (
  onLogoutClick: () => void,
  onWriteClick: () => void,
) => ({
  ...baseStyle,
  backgroundImage: `url(${VoteBg})`,
  renderLeft: () => Logo,
  renderRight: () => (
    <>
      <button
        className="text-m mr-[12px] flex items-center gap-x-1"
        onClick={onLogoutClick}
      >
        <img src={LogoutIcon} />
      </button>
      <button
        className="text-m mr-[4px] flex items-center gap-x-1"
        onClick={onWriteClick}
      >
        <img src={WriteIcon} />
      </button>
    </>
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
  renderLeft: () => Logo,
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

const Logo = (
  <span className="logo text-m ml-[4px] text-3xl font-semibold">took!</span>
);
