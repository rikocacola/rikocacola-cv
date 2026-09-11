import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { cn } from '~/lib/cn';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
};

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-leaf text-navy-deeper hover:bg-leaf-dim active:bg-leaf focus-visible:ring-leaf shadow-[0_0_0_1px_rgba(33,208,178,0.6),0_8px_28px_-12px_rgba(33,208,178,0.55)]',
  ghost:
    'bg-transparent text-ink hover:bg-white/5 focus-visible:ring-white/30',
  outline:
    'bg-transparent text-mint ring-1 ring-mint/40 hover:bg-mint/10 hover:ring-mint/70 focus-visible:ring-mint',
};

const sizeStyles: Record<Size, string> = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-11 px-5 text-sm',
};

const baseClass =
  'focus-ring inline-flex items-center justify-center rounded-md font-medium tracking-tight transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50';

interface ButtonProps extends CommonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> {
  href?: undefined;
}

interface LinkButtonProps extends CommonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> {
  href: string;
}

type Props = ButtonProps | LinkButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(function Button(
  props,
  ref
) {
  const {
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  const inner = (
    <>
      {leftIcon ? <span className="mr-2 -ml-0.5 inline-flex">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span className="ml-2 -mr-0.5 inline-flex">{rightIcon}</span> : null}
    </>
  );

  const computedClassName = cn(
    baseClass,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ('href' in rest && rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={computedClassName}
        {...anchorProps}
      >
        {inner}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={computedClassName}
      {...buttonProps}
    >
      {inner}
    </button>
  );
});