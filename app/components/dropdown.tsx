"use client"
import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

type DropdownProps = {
  label: string,
  children: React.ReactNode,
  text?: string,
  required?: boolean,

  onChange?: (value: string) => void
};

const Dropdown = ({
  label,
  children,
  text,
  required,
  onChange
}: DropdownProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(text || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedLabel(text || "");
  }, [text]);

  const handleSelect = (label: string) => {
    setSelectedLabel(label);
    setIsDropdownOpen(false);

    if (onChange) {
      onChange(label);
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsFocused(!isFocused);
  };

  const handleBlur = () => {
    setIsDropdownOpen(false);
    setIsFocused(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      if (!target.closest('.dropdown-container')) {
        handleBlur();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <form
      className="flex max-w-sm select-none items-center hover:bg-gray-100 cursor-pointer border rounded-md w-full relative px-3 dropdown-container"
      onClick={toggleDropdown}
    >
      <div className="flex gap-x-8 items-center w-full focus:border-primary transition-all duration-300 relative">
        <label className={`text-black text-xs py-2.5 cursor-pointer ${selectedLabel ? "hidden" : ""}`}>
	  {label}
        </label>

        <label className="appearance-none cursor-pointer disabled:text-gray-400 text-gray-700 leading-tight focus:outline-none">
	  {selectedLabel}
	</label>

	{required && !selectedLabel && (
	  <label className="text-red-500">*</label>
	)}
      </div>

      <IoIosArrowDown
        className={`transition-transform text-black transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
      />

      {isDropdownOpen && (
        <div className="absolute p-4 left-0 top-0 mt-[70px] max-h-[200px] overflow-auto w-full bg-white border drop-shadow-card rounded-xl z-10">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
	      onClick={() => handleSelect(React.isValidElement(child) ? child.props.children : '')}
              className="px-4 py-2 rounded-md text-md hover:bg-gray-100"
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default Dropdown;
