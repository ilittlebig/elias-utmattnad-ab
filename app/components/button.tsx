"use client"
import { useState } from 'react';
import Link from 'next/link';

type ButtonProps = {
  actionText: string,
  onClick?: () => void,
  href?: string,
  disabled?: boolean,
  fill?: boolean
};

const Button = ({
  actionText, onClick,
  href, disabled, fill
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (onClick) {
      setTimeout(() => onClick(), 750);
    }
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 750);
  };

  let bgColorClass = "bg-primary";
  if (disabled) {
    bgColorClass = "bg-gray-300";
  } else if (isClicked) {
    bgColorClass = "bg-primary-click";
  }

  const linkClasses = `select-none text-white font-rockwell text-center ${fill ? "w-full" : ""} ${bgColorClass} ${!disabled ? "bg-primary hover:bg-primary-hover" : ""} self-center text-xl text-white rounded-md px-8 py-4`;
  const normalClasses = `select-none flex text-white font-rockwell ${bgColorClass} justify-center text-xl rounded-md px-6 py-3`;

  const handleOnClick = () => {
    if (disabled) return;
    handleClick();
  };

  return (
    <>
      {href ? (
        <Link href={disabled ? "" : href} className={linkClasses}>
	  {actionText}
        </Link>
      ) : (
        <div onClick={handleOnClick} className={normalClasses}>
          {actionText}
        </div>
      )}
    </>
  );
};

export default Button;
