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
  const isTextarea = type === "textarea";

  const labelClass = `flex gap-x-1 pointer-events-none text-sm absolute left-0 transition-all duration-300 ${
    isFocused || inputValue ? '-top-2.5 left-[-1%] bg-white px-3' : isTextarea ? 'top-4' : 'top-1/2 -translate-y-1/2'
  } ${isFocused || inputValue ? 'text-xs text-primary' : 'text-gray-500'}`;

  useEffect(() => {
    setInputValue(text || "");
  }, [text]);

  useEffect(() => {
    setIsFocused(inputValue !== "");
  }, [inputValue]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (onChange) onChange(id, newValue);
  };

  const renderInputField = () => {
    if (isTextarea) {
      return (
        <textarea
          id={id}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className="appearance-none h-44 bg-transparent text-sm disabled:text-gray-400 w-full text-gray-700 py-[18px] leading-tight focus:outline-none resize-none"
        />
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <form className={`flex bg-white items-center ${isFocused ? "border-primary" : ""} border rounded-md w-full relative px-4`}>
      <div className="w-full transition-all duration-300 relative">
        <label htmlFor={htmlFor} className={labelClass}>
	  {label}
	  {required && !inputValue && (
	    <label className="text-red-500">
	      *
	    </label>
	  )}
        </label>

	{renderInputField()}
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
