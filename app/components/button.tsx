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
  icon?: boolean
};

const Button = ({
  actionText,
  onClick,
  href,
  disabled,
  fill,
  className,
  noBackground,
  isLoading,
  destructive,
  instantAction,
  icon
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
    noBackground && "bg-white hover:bg-white",
    disabled ? 'bg-gray-300' : destructive ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-hover',
    isClicked && !disabled && 'scale-95 opacity-75',
    !isClicked && 'scale-100 opacity-100',
    {
      'text-white': destructive,
      'text-[#000000]': !destructive,
      'cursor-pointer': !disabled,
      'px-8 py-4 text-lg': !className,
      'text-black hover:text-[#000000]': noBackground,
      'font-medium text-center': true,
      'w-full': fill,
      'w-fit': !fill,
      'rounded-xl': true,
      'transition-all duration-150': !disabled && !noBackground,
    },
    className
  );

  return (
    <div className={buttonClasses} onClick={handleClick} tabIndex={0}>
      {isLoading && <CgSpinner className="w-8 h-8 animate-spin" />}
      <label className="y-fit cursor-pointer">{actionText}</label>
      {icon && icon}
    </div>
  );
}

export default Button;
