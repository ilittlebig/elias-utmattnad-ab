"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CgSpinner } from 'react-icons/cg'
import Link from 'next/link'

type ButtonProps = {
  actionText: string,
  onClick?: () => void,
  href?: string,
  disabled?: boolean,
  fill?: boolean,
  className?: string,
  noBackground?: boolean,
  isLoading?: boolean,
};

const Button = ({
  actionText, onClick,
  href, disabled, fill,
  className, noBackground,
  isLoading
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
    }, 750);
  };

  const bgColorClass = disabled ? "bg-gray-300" : "bg-primary";
  const clickEffectClass = (isClicked && !disabled) ? "scale-95 opacity-75" : "scale-100 opacity-100";

  const buttonClasses = `${isLoading ? "flex" : ""} text-black items-center gap-x-4 select-none ${disabled ? "" : "cursor-pointer"} ${className ? className : "px-8 py-4 text-xl"} ${noBackground ? "text-gray-500 hover:text-gray-700" : `${bgColorClass}`} font-rockwell text-center ${fill ? "w-full" : "inline-block"} ${!disabled && !noBackground ? "hover:bg-primary-hover transition-all duration-150" : ""} self-center rounded-md ${clickEffectClass}`;

  return (
    <div className={buttonClasses} onClick={handleClick} tabIndex={0}>
      {isLoading ? (
        <div className="animate-spin">
	  <CgSpinner className="w-8 h-8" />
	</div>
      ) : (
        <></>
      )}

      {actionText}
    </div>
  )
}

export default Button;
