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
  outline?: boolean,
  isLoading?: boolean,
  destructive?: boolean,
  instantAction?: boolean,
  icon?: React.ReactNode
};

const Button = ({
  actionText,
  onClick,
  href,
  disabled,
  fill,
  className,
  noBackground,
  outline,
  isLoading,
  destructive,
  instantAction,
  icon
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    setIsClicked(true);

    event.stopPropagation();
    event.preventDefault();

    setTimeout(() => {
      setIsClicked(false);
      if (onClick) onClick();
      if (href) router.push(href);
    }, instantAction ? 0 : 750);
  };

  const buttonClasses = clsx(
    "flex items-center justify-center gap-x-2",
    noBackground && "bg-white hover:bg-white",
    disabled ? 'bg-gray-300' : destructive ? 'bg-red-500 hover:bg-red-600' : !outline ? 'bg-primary hover:bg-primary-hover' : '',
    isClicked && !disabled && 'scale-95 opacity-75',
    !isClicked && 'scale-100 opacity-100',
    outline && 'border-[1px] border-primary hover:border-opacity-30',
    {
      'text-white': destructive,
      'text-[#000000]': !destructive,
      'px-6 py-3 text-md': !className,
      'text-black hover:text-[#000000]': noBackground,
      'text-center font-bold rounded-xl': true,
      'w-full': fill,
      'w-fit': !fill,
      'transition-all duration-300': !disabled && !noBackground,
    },
    className
  );

  return (
    <div role="button" className={buttonClasses} onClick={handleClick} tabIndex={0}>
      {isLoading && <CgSpinner className="w-8 h-8 animate-spin" />}
      <label className="y-fit cursor-pointer">{actionText}</label>
      {icon && icon}
    </div>
  );
}

export default Button;
