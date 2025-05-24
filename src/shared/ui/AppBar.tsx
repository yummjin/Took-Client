import { UserIcon } from '@/assets/icon';
import { HomeBg, LoginBg } from '@/assets/image';

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

export const TitleAppBar = (title?: string, bgImage?: string) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  backgroundImage: `url(${bgImage})`,
  title: title || '',
});
