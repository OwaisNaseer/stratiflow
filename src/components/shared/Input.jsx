import React, { useState } from "react";
// import { EyeIcon } from '../../../assets/Icons';

const Input = ({
  label,
  type,
  placeholder,
  name,
  required,
  value,
  onChange,
  onKeyDown,
  onFocus,
  onPaste,
  ref,
  maxLength,
  minLength,
  error,
  errorMsg,
  disabled,
  acceptText,
  autoFocus,
  startContent,
  endContent,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEyeIconClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (acceptText === "alphabets") {
    value = value?.replace(/[^A-Za-z]/gi, "");
  } else if (acceptText === "number") {
    value = value?.replace(/[^0-9]/gi, "");
  }

  return (
    <div className="mt-1 pb-1 relative w-full">
      <div className={`flex items-center border  rounded w-full  ${error ? "border-red-500 ":"" }`}>
        {label ? (
          <label
            htmlFor="email"
            className={`absolute -top-[10px] left-2 bg-white px-[2px] text-[12px] font-medium ${
              error ? "text-red-500 " : "text-text01"
            } select-none`}
          >
            {label}
          </label>
        ) : null}

        <span className="black text-[13px] mx-2 mt-0.5">{startContent}</span>

        <input
          autoComplete="off"
          name={name}
          placeholder={placeholder}
          type={passwordVisible ? "text" : type}
          required={required}
          className={`  w-full appearance-none border-none rounded ${
            error
              ? "border-error00 hover:border-error00 focus:border-error00 focus:ring-error00"
              : "border-red-500 hover:border-primary00 focus:border-primary00 focus:ring-primary00"
          }  ${
            startContent ? "px-0" : "px-3"
          } h-9 placeholder-text03 focus:outline-none text-sm placeholder:text-sm`}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onPaste={onPaste}
          ref={ref}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          autoFocus={autoFocus}
        />
        {endContent && (
          <span className="black text-[13px] mr-2 mt-0.5">{endContent}</span>
        )}
      </div>

      {/* {type === 'password' && (
        <div className={`absolute right-[1.5px] top-1/2 -translate-y-1/2 cursor-pointer w-[40px] h-[34px] flex justify-center items-center rounded-[3px] ${passwordVisible ? '-scale-[1] translate-all duration-500' : 'translate-all duration-500'}`}
          onClick={handleEyeIconClick}
        >
          <EyeIcon width={24} height={24} />
        </div>
      )} */}
      {/* <div className="pointer-events-none flex w-[50px] items-center absolute top-2 left-2 ">
              <span className="text-black text-small">{startContent}</span>
            </div> */}
      <p className="text-red-500  text-xs pl-1 absolute">{error && errorMsg}</p>
    </div>
  );
};

export default Input;
