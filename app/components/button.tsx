"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CgSpinner } from 'react-icons/cg'

import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  actionText: string,
  onClick?: () => void,
  href?: string,
  disabled?: boolean,
  fill?: boolean,
  className?: string,
  noBackground?: boolean,
  isLoading?: boolean,
  destructive?: boolean,
  instantAction?: boolean,
};

const Button = ({
  actionText, onClick,
  href, disabled, fill,
  className, noBackground,
  isLoading, destructive,
  instantAction
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
      if (onClick) onClick();
      if (href) router.push(href);
    }, instantAction ? 0 : 750);
  };

  const buttonClasses = clsx(
    "flex items-center justify-center gap-x-2",
    noBackground && "bg-transparent hover:bg-transparent",
    disabled ? 'bg-gray-300' : destructive ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-hover',
    isClicked && !disabled && 'scale-95 opacity-75',
    !isClicked && 'scale-100 opacity-100',
    {
      'text-white': destructive,
      'text-black': !destructive,
      'cursor-pointer': !disabled,
      'px-8 py-4 text-xl': !className,
      'text-gray-500 hover:text-gray-700': noBackground,
      'font-rockwell text-center': true,
      'w-full': fill,
      'w-fit': !fill,
      'rounded-md': true,
      'transition-all duration-150': !disabled && !noBackground,
    },
    className
  );

  return (
    <div className={buttonClasses} onClick={handleClick} tabIndex={0}>
      {isLoading && <CgSpinner className="w-8 h-8 animate-spin" />}
      {actionText}
    </div>
  );
}

export default Button;
