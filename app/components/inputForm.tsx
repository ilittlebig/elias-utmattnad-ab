"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'

type FormProps = {
  htmlFor: string,
  label?: string,
  id: string,
  type: string,
  text?: string | number,
  linkText?: string,
  linkHref?: string,
  disabled?: boolean,
  required?: boolean,

  onChange?: (fieldId: string, newValue: string) => void
};

const InputForm = ({
  htmlFor,
  label,
  id,
  type,
  text,
  linkText,
  linkHref,
  disabled,
  required,
  onChange
}: FormProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(text || "");

  useEffect(() => {
    setInputValue(text || "");
  }, [text]);

  useEffect(() => {
    setIsFocused(inputValue !== "");
  }, [inputValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(inputValue !== "");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(id, newValue);
    }
  }

  return (
    <form className="flex items-center bg-white border rounded-md w-full relative px-4">
      <div className="w-full transition-all duration-300 relative">
        <label
          htmlFor={htmlFor}
          className={`flex gap-x-1 pointer-events-none text-sm absolute left-0 transition-all duration-300 ${
            isFocused || inputValue ? '-top-2.5 bg-white px-3' : 'top-1/2 -translate-y-1/2'
          } ${isFocused || inputValue ? 'text-primary' : 'text-gray-500'}`}
        >
	  {label}
	  {required && !inputValue && (
	    <label className="text-red-500">
	      *
	    </label>
	  )}
        </label>

        <input
          id={id}
          type={type}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
	  disabled={disabled}
          className="appearance-none bg-transparent text-sm disabled:text-gray-400 w-full text-gray-700 py-[18px] leading-tight focus:outline-none"
        />
      </div>

      {linkText && linkHref && (
        <Link href={linkHref} className="text-sm text-primary hover:underline transition-all duration-300">
	  {linkText}
        </Link>
      )}
    </form>
  );
};

export default InputForm;
