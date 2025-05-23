import type { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils';

interface ButtonsProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

const ButtonVariants = cva(
  'rounded-md cursor-pointer font-medium focus:outline-none hover:brightness-90',
  {
    variants: {
      intent: {
        primary: 'bg-md text-white',
        textmain: 'text-m',
      },
      size: {
        fit: 'w-full h-fit text-lg',
        sm: '',
        md: '',
        lg: 'w-full h-14 text-xl',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg',
    },
  },
);

export default function Button({
  intent,
  size,
  children,
  className,
  ...props
}: ButtonsProps) {
  return (
    <button
      className={cn(ButtonVariants({ intent, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
