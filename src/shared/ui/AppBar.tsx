import { LoginBg } from '@/assets/image';

const baseStyle = { height: '58px', border: false };

export const BasicAppBar = {
  ...baseStyle,
  backgroundImage: `url(${LoginBg})`,
  renderLeft: () => (
    <span className="logo text-m ml-[4px] text-3xl">took!</span>
  ),
};
